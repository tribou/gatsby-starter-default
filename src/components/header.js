import React, { PureComponent } from "react";
import { Link } from "gatsby";

import css from "./header.module.css";

export default class Header extends PureComponent {
  render() {
    const { siteTitle } = this.props;
    return (
      <div className={css.background}>
        <div className={css.container}>
          <h1 className={css.h1}>
            <Link className={css.link} to="/">
              {siteTitle}
            </Link>
          </h1>
        </div>
      </div>
    );
  }
}
