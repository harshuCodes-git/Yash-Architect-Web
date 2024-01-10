    let selectedFile;

    function openSection() {
        const dropArea = document.getElementById('drop-area');
        const previewButton = document.getElementById('preview-button');
        dropArea.style.display = 'block';
        previewButton.style.display = 'none';
        document.getElementById('file-preview').style.display = 'none';
    }

    function dragOverHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        document.getElementById('drop-area').style.border = '2px dashed #000';
    }

    function dropHandler(event) {
        event.preventDefault();
        event.stopPropagation();

        document.getElementById('drop-area').style.border = '2px dashed #ccc';

        const files = event.dataTransfer.files;

        handleFiles(files);
    }

    function handleFileSelect(event) {
        const files = event.target.files;

        handleFiles(files);
    }

    function handleFiles(files) {
        const dropArea = document.getElementById('drop-area');
        const fileLabel = document.getElementById('file-label');
        const clearButton = document.getElementById('clear-button');
        const fileNameDisplay = document.getElementById('file-name');
        const previewButton = document.getElementById('preview-button');
        const filePreview = document.getElementById('file-preview');

        if (files.length > 0) {
            const file = files[0];
            const fileName = file.name;
            const fileType = file.type;
            const fileSize = file.size;

            if ((fileType.startsWith('image/') || fileType === 'application/pdf') && fileSize <= 25 * 1024 * 1024) {
                fileLabel.textContent = fileName;
                clearButton.style.display = 'block';
                selectedFile = file;

                // Hide drop area and show file name
                dropArea.style.display = 'none';
                fileNameDisplay.textContent = `File: ${fileName}`;
                filePreview.style.display = 'block';
                previewButton.style.display = 'block';
            } else {
                alert('Please select a valid PDF or image file with a size less than 25 MB.');
                clearFile();
            }
        } else {
            fileLabel.textContent = 'Choose a file';
            clearButton.style.display = 'none';
        }
    }

    function clearFile() {
        const fileInput = document.getElementById('file-input');
        const fileLabel = document.getElementById('file-label');
        const clearButton = document.getElementById('clear-button');
        const fileNameDisplay = document.getElementById('file-name');
        const previewButton = document.getElementById('preview-button');
        const filePreview = document.getElementById('file-preview');

        fileInput.value = '';
        fileLabel.textContent = 'Choose a file';
        clearButton.style.display = 'none';
        fileNameDisplay.textContent = '';
        filePreview.style.display = 'none';
        previewButton.style.display = 'none';
        selectedFile = null;
    }

    function previewFile() {
        if (selectedFile) {
            const previewUrl = URL.createObjectURL(selectedFile);
            window.open(previewUrl, '_blank');
        } else {
            alert('Please upload a file first.');
        }
    }