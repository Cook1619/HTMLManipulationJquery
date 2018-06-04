let $button = $('<button>Click me</button>')

$('body').prepend($button);

$($button).click(function () {
    alert('Hello!!');
})

$('div').mouseover(function () {

    $('div').css('backgroundColor', 'red');
})
$('div').mouseout(function () {

    $('div').css('backgroundColor', 'white');
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$('p').click(function () {
    $('p').css('color', getRandomColor());
})

let $btn2 = $('<button>Add name</button>')
let $div = $('<div></div>')

$('body').append($btn2);
$('body').append($div);

$($btn2).click(function () {
    let $span = $('<span> Matt </span>');
    $($div).append($span);
})

let friends = ['Cody', 'Tom', 'Erik', 'Aaron', 'Mike', 'Mike', 'Ahmed', 'Adam', 'Adamj', 'Jim'];
let $friend = $('#addFriend');

$($friend).click(function(){
    $('ul').append('<li></li>')
    for(let i = 0; i < friends.length; i++){
        let $liText = $('<li>'+ friends[i] +'</li>')
    }
    $('li').append($liText);
})