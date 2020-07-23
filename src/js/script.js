console.log('JS is working ... ')

//index.html
const system_img_first = document.getElementById('system_img_first');
const links_img = document.querySelectorAll('.links_img');
const links_img_second = document.querySelectorAll('.links_img_second');
const system_img_second = document.getElementById('system_img_second');
const system_name_first = document.getElementById('system_name_first');
const system_name_second = document.getElementById('system_name_second');


//letter send form
const btn_back = document.getElementById('btn_back');
const order_id = document.getElementById('order_id');


//money form
let first_field = document.getElementById('first_field'),
    second_field = document.getElementById('second_field'),
    coefficient_one = 0.95, coefficient_two = 1.05;


if(first_field){
    first_field.addEventListener('input', ()=>{
        if(first_field.value >=100){
            second_field.value = (first_field.value * coefficient_one).toFixed(1);
        }else{
            second_field.value = 0;
        }

    })
}

if(second_field){
    second_field.addEventListener('input', ()=>{
        if(second_field.value >=100){
            first_field.value = (second_field.value * coefficient_two).toFixed(1);
        }else{
            first_field.value = 0;
        }

    })
}


if(btn_back){
    btn_back.addEventListener('click', () => {
        document.getElementById('fields_id').style.display = null
        document.getElementById('text_main_block').style.display = null
        document.getElementById('number_form').style.display = 'none'
        console.log('click')
    })
}

// system_img_first.addEventListener('click', ()=>{
//     document.getElementById("dropdown-content").style.display = "block";
// })


links_img.forEach((item) => {
    item.addEventListener('click', ()=>{
        let DB_img = system_img_first.src;
        system_name_first.value = item.name;
        system_img_first.src = item.src;
        item.src = DB_img;
    })
})

links_img_second.forEach((item) => {
    item.addEventListener('click', ()=>{
        let DB_img = system_img_second.src;
        system_name_second.value = item.name;
        system_img_second.src = item.src;
        item.src = DB_img;
    })
})


if(order_id){
    order_id.value = Date.now()
}




