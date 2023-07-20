export async function load({ fetch }) {
	const res = await fetch('http://localhost:8080/projects');
	const projects = await res.json();

	if (res.ok) {
		return { projects };
	} else {
		return { error: projects };
	}
}
