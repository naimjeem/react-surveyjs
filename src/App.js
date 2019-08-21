import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
// import SurveyCreator from "./SurveyCreator";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
require("icheck");

Survey.StylesManager.applyTheme("default");

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {
  json = {
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "Sex",
        "choices": [
         {
          "value": "item1",
          "text": "Male"
         },
         {
          "value": "item2",
          "text": "Female"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "Do you drink alcohol?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "Do you have / had an alcohol problem?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question4",
        "title": "Do other people think you have / had an alcohol problem?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "Have you ever used illicit or street drugs?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question6",
        "title": "Do you have / had an drug problem?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question7",
        "title": "Do other people think you have / had a drug problem?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "Do you have / had Cirrhosis?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question9",
        "title": "Do you have / had Other Liver problem?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "paneldynamic",
        "name": "question10",
        "templateElements": [
         {
          "type": "radiogroup",
          "name": "question12",
          "title": "Do you have / had Other Liver problem?",
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           }
          ]
         },
         {
          "type": "radiogroup",
          "name": "question13",
          "title": "When finished?",
          "choices": [
           {
            "value": "item1",
            "text": "Early"
           },
           {
            "value": "item2",
            "text": "Mid"
           },
           {
            "value": "item3",
            "text": "Late"
           }
          ]
         },
         {
          "type": "text",
          "name": "question14",
          "title": "Comment"
         }
        ]
       }
      ]
     }
    ]
   }
  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + result);
  }

  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with SurveyJS</h2>
        </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          <h1>SurveyJS library in action:</h1>
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
          {/*If you do not want to show Survey Creator, comment the line below*/}
          {/* <h1>SurveyJS Creator in action:</h1>
          <SurveyCreator /> */}
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
