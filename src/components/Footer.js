import React from "react";

let bold = [
  "TRAINING",
  "PRODUCTS",
  "WHY DAIKIN",
  "AFTER SALES SERVICES",
  "ABOUT US"
];

let content = [
  ["National Training Center", "Training Curriculum", "TOS"],
  ["Residential", "C", "I"],
  ["Customer Voices", "BDT", "OS"],
  ["Contact Center", "GS", "MS", "EC", "FAQ", "SP", "ST"],
  ["About Daikin Indonesia", "ADG", "BDD", "N&A"]
];

function List() {
  return bold.map((item, boldIndex) => {
    return (
      <div className="row">
        <ul className="col-lg-1 mb-md-0 mb-3 mx-auto list-unstyled">
          <li style={{ color: "white" }}>
            <strong>{item}</strong>
          </li>
        </ul>
        <ul className="col-lg-1 mb-md-0 mb-3 ml-auto mr-auto list-unstyled">
          {content.map((contentItem, contentIndex) => {
            console.log(boldIndex, contentIndex);
            if (contentIndex === boldIndex) {
              return contentItem.map((real, contentItemIndex) => (
                <li key={contentItemIndex}>
                  <a href="#">{real}</a>
                </li>
              ));
            }
          })}
        </ul>
      </div>
    );
  });
}

// institute@onero.id cc: filbert@onerosolutions.com subject: NAMA#FE#24NOV

function Footer() {
  return (
    <div>
      <footer
        className="page-footer font-small pt-4"
        style={{ backgroundColor: "#f4f4f6" }}
      >
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <hr className="clearfix w-100 d-md-none pb-3" />
            {List()}TRAINING
          </div>
        </div>
      </footer>
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        {/* copyright */}
        Copyright &copy; {new Date().getFullYear()} Indonesia Company All Rights
        Reserved
      </footer>
    </div>
  );
}

export default Footer;
