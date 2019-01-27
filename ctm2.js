let numberOfCorrectQuestions = 0;
      $(function solution() {
        $("fieldset").each(function(index) {
           //$(this) = fieldset

          $(this).children("input").each(function(index) {
           
            let indexes = $(this).attr("id").match(/choice-(\d*)-(\d*)/);
            console.log(indexes);
            let question_index = indexes[1];
            let choice_index = indexes[2];

            // run should_be_checked() for each choice, confirm it iterates through every question, and add to numberOfCorrectQuestions for every one.  
            
          })
          
        });
      });
