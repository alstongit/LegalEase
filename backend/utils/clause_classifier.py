from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
from torch.nn.functional import softmax

class ClauseClassifier:
    def __init__(self, model_path):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.tokenizer = AutoTokenizer.from_pretrained(model_path)
        self.model = AutoModelForSequenceClassification.from_pretrained(model_path).to(self.device)
        self.label_mapping = {0: "fair", 1: "clearly_unfair"}

    def _warn_if_truncated(self, clauses):
        tokenized_lengths = [len(self.tokenizer.tokenize(c)) for c in clauses]
        if any(length > 512 for length in tokenized_lengths):
            print("⚠️ Warning: One or more clauses exceed 512 tokens and will be truncated.")

    def predict(self, clauses):
        if isinstance(clauses, str):
            clauses = [clauses]

        self._warn_if_truncated(clauses)

        inputs = self.tokenizer(
            clauses,
            return_tensors="pt",
            padding=True,
            truncation=True,
            max_length=512
        )
        inputs = {k: v.to(self.device) for k, v in inputs.items()}

        self.model.eval()
        with torch.no_grad():
            outputs = self.model(**inputs)
            logits = outputs.logits
            probs = softmax(logits, dim=1)

        predicted_classes = torch.argmax(probs, dim=1).tolist()
        confidences = probs.max(dim=1).values.tolist()

        return [
            {
                "clause": clause,
                "label": self.label_mapping.get(pred_class, "could be unfair"),
                "confidence": round(confidence, 4)
            }
            for clause, pred_class, confidence in zip(clauses, predicted_classes, confidences)
        ]
