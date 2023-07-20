<script lang="ts">
	// @ts-ignore
	export let data;
	let { projects } = data;
	$: {
		console.log(data);
		console.log(`type of data: ${typeof data}`);
	}
</script>

<div class="container flex flex-wrap justify-center gap-4 p-10 mx-auto align-middle">
	{#each projects as project}
		<a
			class="flex flex-col gap-4 p-4 mb-10 border-2 border-slate-900 hover:bg-slate-950 hover:text-white w-[250px] cursor-pointer rounded-xl justify-center align-middle"
			href={`projects/${project.id}/summary`}
			aria-label={`Navigate to ${project.name} project`}
		>
			<h2 class="font-semibold text-center">Project Name: {project.name} {project.id}</h2>
		</a>
	{/each}
</div>
