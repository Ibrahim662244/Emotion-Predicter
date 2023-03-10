var date = new Date()
let display_date= "Date" + date.toLocaleDateString()


$(document).ready(function () {
    $("#display_date").html(display_date)
    console.log('Ready')
})
    let predicted_emotion;

    //  write an event, when Submit button is clicked
        $(function () {
            $("#prediction_button").click(function () {


                let input_data = {
                    "text": $("#text").val()
                }
            })
            console.log(input_data)
        let text_value = $('').val()
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({
            type : 'POST',
            url : "/predict-emotion",
            data : JSON.stringify(input_data),
            dataType : 'json',
            contentType : 'application/json',
            success : function(result){

                // extract prediction and emoticon url from result
                    predicted_emotion = result.data.predicted_emotion_emo_url = result.data.predicted_emotion_img_url

                //  update the DOM elements
                    $("#prediction").html(predicted_emotion)
                    $('#prediction').css("display", "block");
                //  show them
                    $("#emo_img_url").attr('scr', emo_url );
                    $('#emo_img_url').css("display", "block");
            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
