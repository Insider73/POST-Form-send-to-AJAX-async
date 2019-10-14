let message = {
    loading: 'Загрузка...',
    succes: 'Спасибо скоро мы с вами свяжемся!',
    error: 'Произошла ошибка при отправке!'
};

let form = document.querySelector('.main-form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');
    
    form.addEventListener('submit', function(event) {

        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();

        request.open('POST','server.php');
        request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        //request.setRequestHeader('Content-type','application/json; charset=utf-8');

        let formData = new FormData();

        // let obj = {};
        // formData.forEach(value,key) {
        //     obj[key] = value;
        // }

        // let json = JSON.stringify(obj);

        request.send(formData);

        request.addEventListener('readystatechange',function(){
            if(request.readyState < 4){
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200){
                statusMessage.innerHTML = message.succes;
            } else {
                statusMessage.innerHTML = message.error;
            }
        });
});