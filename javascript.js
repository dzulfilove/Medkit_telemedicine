// Tambahkan kode JavaScript kalian di file ini


const buttons = document.querySelectorAll('.button');
const articles = document.querySelectorAll('.card-artikel');

// Tambahkan event listener untuk setiap button filter
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Hapus class active dari semua button
    buttons.forEach(btn => btn.classList.remove('active'));
    // Tambahkan class active pada button yang di klik
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    // Tampilkan artikel sesuai dengan kategori yang di klik
    articles.forEach(card => {
      if (category === 'all' || category === card.getAttribute('data-category')) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


function handleGetFormData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;

  return {
    name,
    email,
    city,
    zipCode,
    status
  };
}

function isNumber(inputString) {
    return !isNaN(inputString);
  }
  
  function checkboxIsChecked() {
    return document.getElementById("status").checked;
  }

  function validateFormData(formData) {
    if (
      formData &&
      isNumber(formData.zipCode) &&
      checkboxIsChecked(formData.status)
    ) {
      return true;
    }
    return false;
  }
  
 
  function submit(event) {
    event.preventDefault();
    const formData = handleGetFormData();
    const isFormValid = validateFormData(formData);
    const warning = document.getElementById("warning");
    if (!isFormValid) {
      warning.style.visibility = 'visible';
      warning.innerHTML = "Periksa form anda sekali lagi";
      

    } else {
      warning.style.visibility = 'hidden';
      warning.innerHTML = "";
      // Lakukan sesuatu setelah form di-submit
    }
  }
  
  const form = document.getElementById("my-form");
  form.addEventListener("submit", submit);
  

