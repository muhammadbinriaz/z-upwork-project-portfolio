import React from "react";

const Tools = () => {
  const tools = [
    { name: "Apollo", use: "Sales intelligence & lead database" },
    {
      name: "LinkedIn Sales Navigator",
      use: "Advanced lead & company research",
    },
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

  return (
    <section className="section--tight">
      <div className="container-page">
        <h2
          style={{
            color: "var(--color-ink)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          Tools & Platforms
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table className="spec-sheet">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.name}>
                  <td
                    style={{
                      fontFamily: "var(--font-outlier)",
                      fontSize: "var(--text-sm)",
                      color: "var(--color-ink)",
                      fontWeight: 500,
                    }}
                  >
                    {tool.name}
                  </td>
                  <td style={{ color: "var(--color-muted)" }}>{tool.use}</td>
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
