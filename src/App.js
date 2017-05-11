import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Footer, FormArea, Gallery, Items, Splash, Spotlight } from './components';

const galleryFiller = [];
for(let i = 1; i<=12; i++){
	galleryFiller.push({
		title: `Title ${i}`,
		text: `More blah, blah, blah filler text for gallery item ${i}`,
		callToAction: `Click Me ${i}`,
		image: i
	});
}
const itemsFiller = [];
let itemTitleText = "Lorem ipsum dolor sit amet consectetur adipiscing elit Morbi id ante sed";
const itemTitleArr = itemTitleText.split(" ");
const images = ["diamond", "save", "bar-chart", "wifi", "cog", "paper-plane", "desktop", "refresh", "hashtag", "bolt", "envelope", "leaf"];
const itemTextFiller = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit";
for(let i = 0; i<12; i++){
	itemsFiller.push({
		title: itemTitleArr[i],
		text: itemTextFiller.slice(i*5).concat(itemTextFiller.slice(0,i*5)),
		image: "fa-"+images[i]
	});
}

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			form: {
				name: "",
				email: "",
				semicolon: "",
				message: "",
				human: false,
				emailMe: false,
				mailingList: false,
				responses: ["a response", "and another"],
				errors: ["an error", "and another"],
			}
		}
		this.updateFormState = this.updateFormState.bind(this);
		this.submitMailForm = this.submitMailForm.bind(this);
	}
	updateFormState(e){
		console.log(e.target.id, e.target.value, e.target.type);
		let form = this.state.form;
		if(e.target.type === "checkbox"){
			form[e.target.id]=!form[e.target.id];
		}else if(e.target.type==="radio"){
			form[e.target.name]=e.target.id;
		}else{
			form[e.target.id]=e.target.value;
		}
		form.responses=[];
		form.errors=[];
		this.setState({form});
		console.log('state.form', this.state.form)
	}
	submitMailForm(){
		console.log('submitMailForm stub');
	}
	render(){
		return(
			<div id="wrapper" className="divided">

				<Splash 
					title="Splash"
					text="A bunch of text here as the blah, blah, blah for the site. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum."
					callToAction="Do Something"
					image="banner"
				/>
		
				<Spotlight
					orient="right"
					title="Header 1"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."
					callToAction="Learn More"
					image="spotlight01"
				/>

				<Spotlight
					orient="left"
					title="Header 2"
					text="More text here. Blah, blah, blah....."
					callToAction="Details"
					image="spotlight02"
				/>
				<Spotlight
					orient="right"
					title="Header 3"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."
					callToAction="Details"
					image="spotlight03"
				/>
				<Spotlight
					orient="left"
					title="Header 4"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."
					callToAction="Details"
					image="spotlight01"
				/>

				<Gallery 
					sectionHeadTitle="Gallery"
					sectionHeadText="Some text for the head of that Gallery.  Go, Gallery, Go!"
					galleryItems={galleryFiller}
				/>

				<Items
					sectionHeadTitle="Items"
					sectionHeadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum"
					items={itemsFiller}
				/>

				<FormArea
					formState={this.state.form}
					updateFormState={this.updateFormState}
					submitMailForm={this.submitMailForm}
					callToAction="Get In Touch"
					form={[
						{
							type: 	"text",
							id: 		"name",
							label: 	"Name",
							layout: "half first",
						},
						{
							type: 	"email",
							id: 		"email",
							label: 	"Email",
							layout: "half",
						},
						{
							type: 	"radio",
							id: 		"true",
							label: 	"Team Semi-Colon!",
							name: 	"semicolon",
							layout: "half first",
						},
						{
							type: 	"radio",
							id: 		"false",
							label: 	"Semicolons Must Die!",
							name: 	"semicolon",
							layout: "half",
						},
						{
							type: 	"textarea",
							id: 		"message",
							label: 	"Message",
							layout: "",
							rows: 	"6",

						},
						{
							type: 	"checkbox",
							id: 		"human",
							label: 	"I'm a human",
							name: 	"human",
							layout: "third first",
						},
						{
							type: 	"checkbox",
							id: 		"emailMe",
							label: 	"Send Me a Copy of this E-Mail",
							name: 	"emailMe",
							layout: "third",
						},
						{
							type: 	"checkbox",
							id: 		"mailingList",
							label: 	"Add Me to Mailing List",
							name: 	"mailingList",
							layout: "third",
						},
						{
							type: 	"submit",
							id: 		"submit",
							text: 	"Send Message",
						},
					]}
				/>
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));