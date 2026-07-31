<!-- ===== Language Switch Bar (English Active) ===== -->
<div align="center" style="margin: 10px 0 20px 0; padding: 8px; background: #161b22; border-radius: 30px; display: inline-block; width: auto; border: 1px solid #30363d;">
    <a href="./ABOUT.md" style="background: #6ae3ff; color: #0a0a0f; padding: 6px 22px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 14px; margin: 0 5px; display: inline-block;">
        🇬🇧 English (Default)
    </a>
    <a href="./ABOUT-AR.md" style="background: transparent; color: #c9d1d9; padding: 6px 22px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 14px; margin: 0 5px; display: inline-block; border: 1px solid #30363d;">
        🇾🇪 العربية
    </a>
</div>

---

# 📌 Repository Identity Card

| Field | Details |
| :--- | :--- |
| **Repository Name** | `Jabri_Checkout` |
| **GitHub Repo** | [https://github.com/Jabri-web/Jabri_Checkout](https://github.com/Jabri-web/Jabri_Checkout) |
| **GitHub Pages** | [https://jabri-web.github.io/Jabri_Checkout/](https://jabri-web.github.io/Jabri_Checkout/) |
| **Current File** | `./ABOUT.md` (English) |
| **Language** | English (Default) / العربية (Alternative) |
| **DOI** | [10.5281/zenodo.20513840](https://doi.org/10.5281/zenodo.20513840) |
| **Author** | [Eng. Abdulla Mohammed Nasser Al-Jabri](https://github.com/Jabri-web) |
| **License** | MIT License |
| **Identity** | `Z + C + A = 1` |

---

# 🔍 Jabri_Checkout

**Checkout & Validation System – Inspect, Test, and Document the Entire Repository Ecosystem**

---

<div align="center">
  <img src="Image/Dar2.png" width="80%" style="border-radius: 12px; border: 2px solid #6ae3ff;" alt="Dar Al-Hajar, Yemen">
  <p><i>🏛️ Dar Al-Hajar, Yemen – The heritage that bridges the ancient past to the future of technology.</i></p>
</div>

---

## 📖 About This Repository

**Jabri_Checkout** is the **validation and testing system** for the entire Jabri-web ecosystem. It acts as the quality assurance layer, inspecting all repositories to ensure code integrity, proper documentation, and consistent structure across the organization.

Based on the GitHub Actions `checkout` action, this repository provides the tools and workflows needed to verify that every project meets the Jabri-web standards before deployment.

**Key Features:**
- 🧪 **Automated Testing** – Runs checks on all repositories to validate code quality.
- 📄 **Documentation Verification** – Ensures `README.md`, `ABOUT.md`, and other key files are present and correctly formatted.
- 🔗 **Link Validation** – Checks that all DOIs and GitHub Pages links are active and correct.
- 🔄 **CI/CD Integration** – Designed to be used as a GitHub Action in workflows across the organization.

---

## 🗂️ Repository Structure

| Directory / File | Description |
| :--- | :--- |
| `action.yml` | Main action definition for the checkout workflow. |
| `dist/` | Bundled distribution files for the action. |
| `src/` | Source code for the checkout and validation logic. |
| `.github/workflows/` | CI/CD workflows for testing and validation. |
| `README.md` | User guide and documentation. |
| `LICENSE` | MIT License text. |

---

## 🔬 Key Features

| Feature | Description |
| :--- | :--- |
| **Credential Security** | Stores credentials in `$RUNNER_TEMP` instead of `.git/config` for improved security. |
| **Flexible Checkout** | Supports sparse checkout, fetch-depth control, and submodule handling. |
| **Multi‑Repository** | Can checkout multiple repositories side‑by‑side or nested. |
| **Private Repo Support** | Works with internal and private repositories using a custom PAT. |
| **Cross‑Platform** | Compatible with Linux, macOS, and Windows runners. |

---

## 🚀 Usage Examples

### Basic Checkout
```yaml
- uses: actions/checkout@v6
