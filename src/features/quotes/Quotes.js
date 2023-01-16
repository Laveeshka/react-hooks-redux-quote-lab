import React from "react";
import QuoteCard from "./QuoteCard";
import { useSelector } from "react-redux";

function Quotes() {
  //retrieve quotes from state
  const quotes = useSelector(state => state.quotes);

  //create a QuoteCard component for each quote
  const quoteCardComponents = quotes.map(quote => <QuoteCard key={quote.id} quote={quote}/>);

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/*
              TODO:

              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */}
            {quoteCardComponents}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
