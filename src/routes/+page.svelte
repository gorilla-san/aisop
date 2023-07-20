<script lang="ts">
	// @ts-ignore
	export let data;
	let { projects } = data;
	$: {
		console.log(data);
		console.log(`type of data: ${typeof data}`);
	}
</script>

<div class="container mx-auto prose">
	<h1>Projects</h1>
	<br />
	{#each projects as project}
		<div class="flex flex-col gap-4 mb-10">
			<h2>Project Name: {project.name} {project.id}</h2>
			<video controls class="w-[500px]">
				<source src={`http://127.0.0.1:8080/${project.video}`} type="video/webm" />
				<track
					kind="captions"
					src={`http://127.0.0.1:8080/${project.video.captions}`}
					srclang="en"
					label="English"
				/>
				Your browser does not support the video tag.
			</video>
			<div class="flex w-[500px] gap-4 flex-wrap">
				{#each project.screenshots as screenshot}
					<img class="w-[240px]" src={`http://127.0.0.1:8080/${screenshot}`} alt="screenshot" />
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
