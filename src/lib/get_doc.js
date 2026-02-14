import matter from 'gray-matter'
import { marked } from 'marked'

const files = import.meta.glob("/src/lib/docs/*.md", { eager: true, as: "raw" });

const renderer = {
	link(href, title, text) {
		const link = marked.Renderer.prototype.link.call(this, href, title, text);
		return link.replace("<a","<a target='_blank' rel='noreferrer' ");
	}
};

marked.use({
	renderer
});

function parseMarkdown(raw, filepath) {
	const { data, content } = matter(raw);

	const filename = filepath.split("/").at(-1);

	return {
		filepath: filename,
		content: marked(content),
		slug: filename.replace(".md", "")
	}
}

const docs = Object.entries(files).map(([path, raw]) => parseMarkdown(raw, path));

export function getMainpage() {
	return docs.find((doc) => doc.slug == "main");
}

export function getDoc(slug) {
	return docs.find((doc) => doc.slug == slug);
}
