/**
 * Created by miroK on 2016/10/4.
 */
app.controller('rCtrl',['$scope',function(scope){

    $('#charge').click(function(){
        $.ajax({
            type:'post',
            url:'http://localhost/9-29/trjj/recharge.php',
            dataType:'json',
            data:{
                rechargeNum:$('#num').val(),
                phoneNum:$('#phone').val(),
                yzm:$('#yzm').val()
            },
            success:function(data){
                if(data=="success"){
                    alert('充值成功');
                    localStorage.setItem('all',parseInt(localStorage.getItem('all'))+parseInt($('#num').val()));
                    localStorage.setItem('ready',parseInt(localStorage.getItem('ready'))+parseInt($('#num').val()));
                    window.location.href='#resuc';
                }
            }
        })
    })
}]);