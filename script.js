document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
  
    btn1.addEventListener('click', function() {
      click_button('btn1');
    });
  
    btn2.addEventListener('click', function() {
      click_button('btn2');
    });
  
    function click_button(id) {
      const button_click = document.getElementById(id);
      const other_button = id === 'btn1' ? btn2 : btn1;
      
      const color = button_click.style.backgroundColor === 'rgb(52, 152, 219)' ? '#ff0000' : '#3498db';
      
      button_click.style.backgroundColor = color;
      other_button.style.backgroundColor = color === '#3498db' ? '#ff0000' : '#3498db';
    }
});