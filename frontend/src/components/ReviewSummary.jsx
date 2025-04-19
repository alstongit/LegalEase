const ReviewSummary = ({ review }) => {
  const lines = review.split("\n");
  const content = [];
  let bulletItems = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const isHeading = trimmed.endsWith(":");
    const isBullet = trimmed.startsWith("-") || trimmed.startsWith("•");

    if (isHeading) {
      if (bulletItems.length) {
        content.push(
          <ul key={`ul-${index}`} className="list-disc ml-6 space-y-1">
            {bulletItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
        bulletItems = [];
      }
      content.push(
        <p key={`heading-${index}`} className="text-base font-semibold text-yellow-900 mt-4">
          {trimmed}
        </p>
      );
    } else if (isBullet) {
      bulletItems.push(trimmed.replace(/^[-•]\s*/, ""));
    } else {
      if (bulletItems.length) {
        content.push(
          <ul key={`ul-${index}`} className="list-disc ml-6 space-y-1">
            {bulletItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
        bulletItems = [];
      }
      content.push(
        <p key={`para-${index}`} className="text-gray-700">
          {trimmed}
        </p>
      );
    }
  });

  if (bulletItems.length) {
    content.push(
      <ul key="ul-final" className="list-disc ml-6 space-y-1">
        {bulletItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">Review Summary</h3>
      <div className="space-y-4 text-gray-800 text-sm leading-relaxed">{content}</div>
    </div>
  );
};

export default ReviewSummary;
