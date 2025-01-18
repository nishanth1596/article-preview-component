import facebookIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";

const Share = () => {
  return (
    <section className="wrapper">
      <section className="wrapperMain">
        <div className="shareIcons">
          <p>share</p>
          <nav className="iconBox">
            <a href="javascript:void(0)" className="icon">
              <img src={facebookIcon} alt="Share on Facebook" />
            </a>
            <a href="javascript:void(0)" className="icon">
              <img src={twitterIcon} alt="Share on Twitter" />
            </a>
            <a href="javascript:void(0)" className="icon">
              <img src={pinterestIcon} alt="Share on Pinterest" />
            </a>
          </nav>
        </div>
      </section>
    </section>
  );
};

export default Share;
