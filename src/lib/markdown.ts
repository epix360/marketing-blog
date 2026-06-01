export function markdownToHtml(markdown: string | undefined): string {
	if (!markdown) return '';

	let html = markdown;

	html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
	html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
	html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
	html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
	html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
	html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
	html = html.replace(/^[ \t]*[-*] (.+)$/gm, '<li>$1</li>');

	const lines = html.split('\n');
	let result = '';
	let inList = false;

	for (const line of lines) {
		const trimmed = line.trim();
		if (trimmed.startsWith('<li>')) {
			if (!inList) { result += '<ul>'; inList = true; }
			result += trimmed;
		} else {
			if (inList) { result += '</ul>'; inList = false; }
			if (trimmed && !trimmed.startsWith('<')) {
				result += '<p>' + trimmed + '</p>';
			} else {
				result += trimmed;
			}
		}
	}
	if (inList) result += '</ul>';

	return result;
}
