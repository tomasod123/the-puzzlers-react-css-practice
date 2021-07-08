import React, { Component } from "react";
import QuoteData from "./quotes.json";

class QuoteList extends Component {
    render() {
        return (
            <div>
                {QuoteData.map((quoteDetail, index) => {
                    return (
                        <div>
                            <h1>{quoteDetail.quote}</h1>;
                        </div>

                    );
                })}
            </div>
        );
    }
}

export default QuoteList;
