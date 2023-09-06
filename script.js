import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

var quotes = [
  [
    "You have power over your mind – not outside events. Realize this, and you will find strength.",
    "Marcus Aurelius"
  ],
  [
    "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love…",
    "Marcus Aurelius"
  ],
  [
    "If it is not right do not do it; if it is not true do not say it.",
    "Marcus Aurelius"
  ],
  [
    "Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours.",
    "Marcus Aurelius"
  ],
  [
    "Man is not worried by real problems so much as by his imagined anxieties about real problems.",
    "Epictetus"
  ],
  [
    "Any person capable of angering you becomes your master; he can anger you only when you permit yourself to be disturbed by him.",
    "Epictetus"
  ],
  [
    "He who laughs at himself never runs out of things to laugh at.",
    "Epictetus"
  ],
  [
    "It’s not what happens to you, but how you react to it that matters.",
    "Epictetus"
  ],
  [
    "It’s not because things are difficult that we dare not venture. It’s because we dare not venture that they are difficult.",
    "Seneca"
  ],
  [
    "Hang on to your youthful enthusiasms – you’ll be able to use them better when you’re older.",
    "Seneca"
  ],
  ["Associate with people who are likely to improve you.", "Seneca"],
  ["The whole future lies in uncertainty: live immediately.", "Seneca"],
  [
    "The person who says it cannot be done should not interrupt the person who is doing it.",
    "Chinese Proverb"
  ]
];

class QuoteParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getQuote() {
    let key = Math.floor(Math.random() * 12);
    return quotes[key];
  }

  handleClick() {
    const randomQuote = this.getQuote();
    this.setState({
      quote: randomQuote
    });
  }

  // get a colour to set into the background and possibly the social icons, get new quote button

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render() {
    const { title } = this.props;

    return (
      <div className="container">
        <div className="content" id="quote-box">
          <h1>{title}</h1>
          <p>
            {
              <Quote
                displayColor={this.randomColor}
                handleClick={this.handleClick}
                {...this.state}
              />
            }
          </p>
        </div>
      </div>
    );
  }
}

class Quote extends React.Component {
  createTweetLink() {
    let ahref = ["https://twitter.com/intent/tweet?text=", this.props.quote];
    return ahref.join("");
  }

// in future I'd like a static image or M.A. or another classic rather than randomColour

  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div>
        <h1 id="text">"{this.props.quote[0]}"</h1>
        <h3 id="author">{this.props.quote[1]}</h3>
        <button id="new-quote" onClick={this.props.handleClick}>
          More Wisdom
        </button>
        <br />
        <a
          href={this.createTweetLink()}
          target="_blank"
          className="checkbox"
          id="tweet-quote"
        >
          Tweet This
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  <QuoteParent title="StoicQuote" />,
  document.getElementById("root")
);


// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/
