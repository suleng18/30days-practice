const upload = document.querySelector('#mypicture');
const preview = document.querySelector('.preview');
const error = document.querySelector('.error');

upload.addEventListener('change', function (e) {
  let file = upload.files[0];

  if (!file) return;

  if (!file.name.endsWith('.jpg') && !file.name.endsWith('.jpeg')) {
    error.textContent = 'Invalid file name';
    return;
  } else {
    error.textContent = '';
  }

  if (file.size / (1024 * 1024) > 3) {
    error.textContent = 'File size is too large';
    return;
  } else {
    error.textContent = '';
  }

  let img = document.createElement('img');
  let fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.onloadend = function (e) {
    // console.log('load xong', e.target);
    img.src = e.target.result;
  };

  // img.src = URL.createObjectURL(file);
  preview.appendChild(img);
});
