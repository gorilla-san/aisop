<script lang="ts">
	export let data;
	console.log(data);
	let { project } = data;
</script>

<div class="container flex flex-col items-center justify-center gap-10 p-10 mx-auto prose">
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
	<h1 class="text-2xl">{project.name + ' ' + project.id}</h1>
</div>
