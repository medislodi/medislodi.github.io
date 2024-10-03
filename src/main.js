var dataresources = {};

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
	const dropZoneElement = inputElement.closest(".drop-zone");

	dropZoneElement.addEventListener("click", (e) => {
		inputElement.click();
	});

	inputElement.addEventListener("change", (e) => {
		if (inputElement.files.length) {
			updateThumbnail(inputElement.files[0]);
		}
	});

	dropZoneElement.addEventListener("dragover", (e) => {
		e.preventDefault();
		dropZoneElement.classList.add("drop-zone--over");
	});

	["dragleave", "dragend"].forEach((type) => {
		dropZoneElement.addEventListener(type, (e) => {
			dropZoneElement.classList.remove("drop-zone--over");
		});
	});

	dropZoneElement.addEventListener("drop", (e) => {
		e.preventDefault();

		if (e.dataTransfer.files.length) {
			inputElement.files = e.dataTransfer.files;
			updateThumbnail(e.dataTransfer.files[0]);
		}

		dropZoneElement.classList.remove("drop-zone--over");
	});
});

function updateThumbnail(file) {
	
	const reader = new FileReader();
	var filename;
	var fileData;
	var fixedname;
	if (file.name.endsWith(".json")) {
		reader.onload = (e) => {
			var json_files = [];
			episode_json = JSON.parse(e.target.result);
			for (filename in episode_json["contents"]["resource"]) {
				json_files.push(filename);
			}
			
			document.querySelectorAll(".drop-zone__dir")[0].addEventListener("change",(f) => {
				const filteredData = [...f.target.files].filter(row => json_files.includes(row.name));
				for (const file of filteredData) {
					file.arrayBuffer().then((fileData) => {
						fixedname = 'resources/' + file.name;
						dataresources[fixedname] = fileData;
					});
				}
			
				setTimeout(()=>{
					document.getElementsByClassName("drop-zone")[0].style.display="none"
					document.dispatchEvent(new CustomEvent('PhalconiaStart'));
				},1000);
			},false);
			
			document.querySelectorAll(".drop-zone__dir").forEach((dirElement) => {
				dirElement.click();
			});
			
			
		}

		reader.readAsText(file)
	}
	
	else if (file.name.endsWith(".zip")) {

		reader.onload = function(e) {
			const data = reader.result;
			JSZip.loadAsync(data).then(function (zip) {
				Object.keys(zip.files).forEach(function (filename) {
					if (filename.includes(".json")) {
						zip.files[filename].async('string').then(function (fileData) {
							episode_json = JSON.parse(fileData);
						})
					}
					else {
						zip.files[filename].async('arraybuffer').then(function (fileData) {dataresources[filename] = fileData});
				  }
				})
			})
			setTimeout(()=>{
				document.getElementsByClassName("drop-zone")[0].style.display="none"
				document.dispatchEvent(new CustomEvent('PhalconiaStart'));
			},1000);
		}

		reader.readAsArrayBuffer(file);
	
	}
}