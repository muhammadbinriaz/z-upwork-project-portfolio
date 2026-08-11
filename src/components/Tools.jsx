import React from "react";
import SectionIntro from "./SectionIntro";

const tools = [
  { name: "Apollo", use: "Sales intelligence & lead database" },
  { name: "LinkedIn Sales Navigator", use: "Advanced lead & company research" },
  { name: "Clay", use: "Data enrichment & waterfall workflows" },
  { name: "ContactOut", use: "Personal email & phone finding" },
  { name: "RocketReach", use: "Multi-source contact discovery" },
  { name: "Hunter", use: "Domain-based email finding & verification" },
  { name: "NeverBounce", use: "Bulk email list verification" },
  { name: "ZeroBounce", use: "Email validation & bounce detection" },
  { name: "Crunchbase", use: "Company intelligence & funding data" },
  { name: "Lusha", use: "Browser-based contact data" },
  { name: "HubSpot", use: "CRM & data management" },
  { name: "Salesforce", use: "Enterprise CRM & reporting" },
  { name: "Google Sheets", use: "Collaborative data organization" },
  { name: "Microsoft Excel", use: "Advanced data analysis & formatting" },
];

const Tools = () => {
  return (
    <section className="section" id="tools" style={{ borderTop: "1px solid var(--color-rule)" }}>
      <div className="container-page">
        <SectionIntro
          eyebrow="Stack"
          title="Tools we use to deliver clean data."
          lede="Industry-standard platforms for research, verification, enrichment, and CRM delivery."
        />

        <div className="premium-card tools-table-wrap">
          <table className="spec-sheet">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.name} data-accent="neutral">
                  <td>
                    <span className="spec-sheet__tool">
                      <span className="spec-sheet__dot" aria-hidden="true"></span>
                      {tool.name}
                    </span>
                  </td>
                  <td>{tool.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Tools;
