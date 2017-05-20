import React from "react";
import {RouteHandler} from "react-router";
import {prefixLink} from "gatsby-helpers";
import {config} from "config";
import "./style.css";

class SiteLinks extends React.Component {
    render() {

        return (
            <div className="sitelinks">
                <ul>
                    <li><a href={ config.siteItunesUrl } target="_blank">iTunes</a></li>
                    <li><a href={ config.siteRssUrl } target="_blank">RSS</a></li>
                    <li><a href={ config.siteSoundcloudUrl } target="_blank">SoundCloud</a></li>
                    <li><a href={ config.siteTwitterUrl } target="_blank">Twitter</a></li>
                    <li><a href={ config.siteEmailUrl }>Email</a></li>
                </ul>

                <ul>
                    <li><small><a href="http://opencollective.com/webpack" target="_blank">Sponsor of Webpack</a></small></li>
                    <li><small><a href="http://5minreact.ru" target="_blank">Listen in Russian</a></small></li>
                    <li><small>Author: <a href="https://twitter.com/petrmyazin" target="_blank">@PetrMyazin</a></small></li>
                </ul>
            </div>
        );
    }
}

export default SiteLinks