window.onload = function () {

    let btnSearch = document.getElementById('btn-search');

    btnSearch.onclick = function () {
        searchByBaidu();
    }

    $('#my-search').keydown(function (e) {
        if (e.keyCode == 13) {
            searchByBaidu();
        }
    });

    showDate();
    showColon();


    function searchByBaidu() {
        let urlBaidu = 'http://www.baidu.com/s?wd=';
        let searchContent = document.getElementById('search-content').value;
        let urlSearchContent = urlBaidu + searchContent;

        console.log(urlSearchContent);
        window.location.href = urlSearchContent;
    }


    function showDate() {
        let myDate = new Date();

        console.log(myDate.getHours());
        console.log(myDate.getDate());

        document.getElementById('hour').innerText = myDate.getHours();
        document.getElementById('minute').innerText = myDate.getDate();

        document.getElementById('month').innerText = myDate.getMonth() + 1;
        document.getElementById('date').innerText = myDate.getDate();

        let myGetDay = myDate.getDay();
        let myDay;
        switch (myGetDay) {
            case 0:
                myDay = '天';
                break;
            case 1:
                myDay = '一';
                break;
            case 2:
                myDay = '二';
                break;
            case 3:
                myDay = '三';
                break;
            case 4:
                myDay = '四';
                break;
            case 5:
                myDay = '五';
                break;
            case 6:
                myDay = '六';
                break;
            default:
                myDay = 'error!';
                break;
        }

        document.getElementById('week').innerText = myDay;
    }


    function showColon() {
        let i = 1;
        setInterval(() => {
            if (i % 2 === 0) {
                document.getElementById('colon').className = 'my-disappear';
            } else {
                document.getElementById('colon').className = '';
            }
            i++;
        }, 1000);
    }
}