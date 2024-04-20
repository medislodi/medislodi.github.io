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
	
	document.getElementsByClassName("drop-zone")[0].style.display="none"

	
	const reader = new FileReader();
	var filename;
	var fileData;

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
			document.dispatchEvent(new CustomEvent('PhalconiaStart'));
		},1000);
	}

	reader.readAsArrayBuffer(file);
}