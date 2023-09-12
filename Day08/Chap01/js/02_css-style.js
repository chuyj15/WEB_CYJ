//문서준비 이벤트
$(function(){
    //스타일 변경하기
    //$(선택자).css('스타일속성', '속성값')
    $('#item1').css('color', 'hotpink')
    $('#item2').css('transform', 'rotate(45deg)')
    //투명도
    $('#item3').css('opacity', '0.5')

    //여러개의 스타일 속성 변경하기
    //-->객체 형태로 지정해준다.
    /* 
        {
            '스타일1' : '속성값1',
            '스타일2' : '속성값2',
            '스타일3' : '속성값3'
        }
    */
        //따옴표 붇이면, 케밥케이스('-' 기호 사용)
        $('#item4 .text').css({
            'color' : 'coral',
            'font-size' : '40px',
            'border' : '5px solid hotpink',
            'width' : '400px',
            'height' : '400px',
            'background-color' : 'black'
        })

        //따옴표 안붙이면, 카멜케이스('-' 기호 사용)
        $('#item5 .text').css({
            color : 'coral',
            fontSize : '40px',
            border : '10px solid hotpink',
            width : '400px',
            height : '400px',
            backgroundColor : 'black'
        })
})