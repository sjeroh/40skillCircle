let counterDate = $('.box h3');
let executed = false;

$(window).scroll(function () {
    let $scroll = $(this).scrollTop() + 200;
    let $offset = $('.easypiechart').offset().top;
    if ($scroll > $offset) {
        pieChart()

        if (!executed) {
            counterDate.each(function () {
                let currrent = $(this);
                let target = currrent.attr('data-rate'); // 90 85
                //A.animte({width:100%},시간,이징,끝나는할일)
                // $({변수:초기값}).animate({변수:종료값},{
                //     옵션
                // })
                $({rate: 0}).animate({rate: target}, {
                    duration: 2500,
                    progress: function () { //중간에 할일
                        let now = this.rate;
                        currrent.text(Math.ceil(now) + "%")
                    }
                })
            })
            executed=true;
        }
        

    }
})


function pieChart() {
    $('.chart').easyPieChart({
        //your options goes here
        barColor: '#17d3e6',
        scaleColor: false,
        trackColor: '#373737',
        lineWidth: 15,
        size: 180,
        animate: 2000,
        lineCap: "butt"
    });

}