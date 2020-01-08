var circles = ["circle_1", "circle_2", "circle_3", "circle_4", "circle_5", "circle_6", "circle_7", "circle_8", "circle_9",];
var colors = ['red', 'yellow', 'green']
var i = 8, j = 2;
var delay_time = $("#delay_time_1").val();

var execute = setInterval(color_the_div, delay_time);
function color_the_div() {
    $(`#${circles[i]}`).css({ background: 'white' });
    clearInterval(execute);
    execute = setInterval(color_the_div, delay_time);
    i++;
    j = j < 2 ? j = ++j : j = 0;
    i = i > 8 ? i = j = 0 : i = i;
    delate_set();
    $(`#${circles[i]}`).css({ background: colors[j] });
}
$("#delay_time_1,#delay_time_2,#delay_time_3").keydown(function () {
    delate_set();
});
function delate_set() {
    delay_time = i >= 0 && i <= 1 || i == 8 ? delay_time = $("#delay_time_1").val() : delay_time = delay_time;
    delay_time = i >= 2 && i <= 4 ? delay_time = $("#delay_time_2").val() : delay_time = delay_time;
    delay_time = i >= 5 && i <= 7 ? delay_time = $("#delay_time_3").val() : delay_time = delay_time;
}