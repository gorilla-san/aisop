export async function load({ params, fetch }) {
	const { id } = params;
	const response = await fetch(`http://localhost:8080/projects/${id}`);
	const project = await response.json();
	if (response.ok) {
		return {
			project
		};
	} else {
		return {
			status: response.status,
			error: new Error(project.message)
		};
	}
}
