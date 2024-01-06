import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { FooterIcons } from "../../components/FooterIcons";
import { FooterIconsWrapper } from "../../components/FooterIconsWrapper";
import { Header } from "../../components/Header";
import { Label } from "../../components/Label";
import { ProjectNfo } from "../../components/ProjectNfo";
import { SectionTitle } from "../../components/SectionTitle";
import { TabActive } from "../../components/TabActive";
import { TabDefault } from "../../components/TabDefault";
import "./style.css";

export const PortfolioPersonal = () => {
  return (
    <div className="portfolio-personal">
      <div className="div-2">
        <div className="overlap">
          <div className="overlap-group">
            <div className="image">
              <div className="overlap-group-2">
                <img className="yellow-bg" alt="Yellow bg" src="/img/yellow-bg.svg" />
                <div className="nav-2">
                  <div className="text-wrapper-5">Projects</div>
                  <TabDefault className="design-component-instance-node-2" text="" />
                  <div className="sobre-wrapper">
                    <img className="img" alt="Sobre" src="/img/sobre.png" />
                  </div>
                </div>
                <img className="image-2" alt="Image" src="/img/image.png" />
              </div>
            </div>
            <Header
              className="header-instance"
              divClassName="header-2"
              navClassName="header-3"
              override={<TabActive className="design-component-instance-node-2" text="" />}
              tabDefaultWrapperHasDiv={false}
              tabDefaultWrapperText=""
              text="Rama Krishna"
            />
          </div>
          <div className="overlap-2">
            <div className="intro">
              <div className="UI-UX-designer">UI/UX DESIGNER</div>
              <div className="content">
                <p className="title">Hello,&nbsp;&nbsp;my name is Rama Krishna</p>
                <div className="subheadline">
                  <p className="text-6">
                    I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have
                    a good sense of humour. I am able to work independently in busy environments and also within a team
                    setting. I am outgoing and tactful, and able to listen effectively when solving problems.
                  </p>
                </div>
                <div className="buttons">
                  <ButtonPrimary className="design-component-instance-node-2" />
                  <ButtonSecondary
                    className="design-component-instance-node-2"
                    href="https://www.linkedin.com/in/rama-krishna-bonumaddhi-3a7582238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  />
                </div>
              </div>
            </div>
            <div className="footer-form">
              <img className="vector" alt="Vector" src="/img/vector-1.svg" />
              <div className="frame-2">
                <div className="form">
                  <div className="div-3">
                    <Label divClassName="label-instance" text="Project Name" />
                    <input className="input" placeholder="Yoga Page" type="number" />
                  </div>
                  <div className="div-3">
                    <Label divClassName="label-instance" text="Project Link" />
                    <input className="input" placeholder="https://ram71118yoga.ccbp.tech" type="url" />
                  </div>
                  <div className="div-3">
                    <Label divClassName="label-instance" text="Description" />
                    <div className="textarea">
                      <p className="placeholder">
                        I build yoga page in this website you know about types of yoga asanas and their benifits in our
                        life.
                      </p>
                    </div>
                  </div>
                  <ButtonPrimary
                    className="design-component-instance-node-2"
                    text="Add"
                    textClassName="button-primary-instance"
                  />
                </div>
              </div>
              <SectionTitle className="section-title-instance" text="Add Project" />
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="frame-3">
            <div className="text-7">Projects View</div>
            <div className="rectangle-3" />
          </div>
          <div className="project">
            <ProjectNfo />
            <img className="pexels-elly" alt="Pexels elly" src="/img/pexels-elly-fairytale-3823207-1.png" />
          </div>
          <div className="project-2">
            <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-7-1.png" />
            <ProjectNfo
              href="https://ram71118rm.ccbp.tech"
              text="Sunrise Avenue"
              text1="In this website we have to book 5 star hotels with our friendly budget with good atmosphere."
            />
          </div>
          <div className="project-2">
            <ProjectNfo
              frameClassName="project-nfo-instance"
              href="http://rk8todoapp.ccbp.tech"
              text="Todos Application"
              text1="In this application we have to add or delete our tasks in our day to day life."
            />
            <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-7.png" />
          </div>
        </div>
        <div className="footer-icons-instance-wrapper">
          <FooterIcons className="footer-icons-instance" />
        </div>
        <FooterIconsWrapper className="footer-icons-2" />
      </div>
    </div>
  );
};
