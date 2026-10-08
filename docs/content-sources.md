# Verifizierte Inhalte

Abgerufen am 30.09.2026:

- https://georgtre.de : Physik-Doktorand an der Universität Heidelberg, Computational Physics / dynamische Systeme; die vier Projektbeschreibungen und GitHub-Link.
- https://arxiv.org/abs/2606.22969 : Titel, Autor:innen, Einreichung am 22.06.2026, Abstract; Status **Preprint**, kein behaupteter Journalartikel.
- https://arxiv.org/pdf/2606.22969 : Affiliations, gemeinsame Erstautorenschaft mit Charlotte Ricarda Doll, öffentliche wissenschaftliche Kontaktadresse (inzwischen durch die vom Nutzer gewünschte persönliche Adresse ersetzt).

Die Forschungsbeschreibung und Paper-Zusammenfassung sind deutschsprachige Zusammenfassungen des Abstracts. Die Zugehörigkeit zur Abteilung für Theoretische Neurowissenschaften am ZI Mannheim folgt aus dem Paper. Die offizielle Abteilungsseite wurde ebenfalls geprüft und direkt verlinkt: https://www.zi-mannheim.de/forschung/abteilungen-ags-institute/theoret-neurowissenschaften.html (Leitung: Prof. Dr. Daniel Durstewitz).

LinkedIn-Profillink am 01.10.2026 direkt vom Nutzer bestätigt: https://www.linkedin.com/in/georg-trede-9484813b5/
Bachelor- und Masterarbeit stellt der Nutzer später bereit. Bis dahin werden keine Titel oder Ergebnisse behauptet.

## Original visual identity and social links

The desktop and mobile forest photographs, Frisbee logo and Roboto font files are copied unchanged from the original georgtre.de assets. The Instagram URL https://www.instagram.com/georgtrede is taken from the original website. All public website text is now in English.

Lab team website confirmed directly by the user: https://durstewitzlab.github.io/team/. This replaces the institutional department link in the research section.

The user explicitly confirmed that their research focus includes non-autonomous systems: systems whose conditions of evolution change over time. This is included in the personal research description, independently of the paper summary.

The user subsequently selected the lab homepage, https://durstewitzlab.github.io/, as the preferred research-group link instead of the team page.

The user confirmed their passion for scouting (https://pfadfinder-hd.de), unicycle hockey through Heidelberg University’s Hochschulsport, spending time outdoors and reading. They requested hausmates.de and pfadfinder-hd.de in the project archive and confirmed building the scouting website. No additional functionality is claimed for hausmates.de.

The user described hausmates.de as an organisational tool for sharehouses, covering household chore distribution, shared expenses and a shared shopping list.

The user selected gt04(at)duck.com as the public contact address, with mailto:gt04@duck.com as its functional email link.

Interactive Lorenz visualization: ported the equations and rho schedule from the user-referenced Codex task 01a0f636-ac6c-7dd0-9f5b-5a1407067804. Sigma=10, beta=8/3, rho=160 (periodic) and 180 (chaotic). JavaScript uses fixed-step RK4 (dt=0.005), a continuous trajectory, alternating 7-second holds at rho=160 and rho=180 with smooth 1-second transitions using elapsed animation time, and a 10-second manual override. After manual control, rho returns smoothly to order over one second before restarting a full periodic phase, without resetting the trajectory. The visual is an illustration of time-dependent conditions, not a learned model or a result from the paper. No GIF file was copied from the local Mac.

Master’s thesis: user-supplied Master_TredeGeorg.pdf, title pages, abstract and conclusion (p. 61). Title: Neural Flow Operators for Solving Advection-Diffusion Systems, 2024, Physics, Heidelberg University. Summary distinguishes the estimated up-to-65× speedup in the evaluated setup from the accuracy/speed trade-off of local differential kernels. The PDF is not published; access is available upon request as instructed by the user.

Bachelor’s thesis: user-supplied Trede_Bachelorthesis.pdf, title page (2 June 2022), abstract and conclusion (p. 29). Auto Alignment Toolkit for Optical Resonators, University of Münster. Summary reports 88.4% relative to the physically achievable limit, not absolute efficiency, and retains the manual resonator-locking calibration limitation. Access is available upon request; the PDF is not published.

Bachelor’s thesis collaboration with the Australian National University (ANU), Canberra, explicitly requested by the user and consistent with the title-page supervision by Dr. Aaron Tranter, ANU Canberra.

The user approved publication of the revised classic-style public CV. The approved PDF is served as assets/Georg_Trede_CV.pdf and linked from the introduction and contact section. Original private CVs and thesis PDFs remain unpublished.

The user requested figure previews on the publication and thesis cards. The master's thesis preview is Figure 5.6 (PDF page 50), comparing simulated velocity fields with FNO predictions and predictions using local differential kernels. The bachelor's thesis preview is Figure 4 (PDF page 12), showing the automated optical-resonator alignment setup. Only the figures are exported, with surrounding page text excluded; the original thesis PDFs remain unpublished. The cards load compact WebP previews and link to 1600px PNG figures. Recreate them with `scripts/extract_thesis_figures.py --master <local-master-pdf> --bachelor <local-bachelor-pdf>` (PyMuPDF and Pillow required only for extraction).

The paper preview uses the user's `paper_advert_figure.png`, supplied in a ZIP archive. The full-size PNG is preserved unchanged as `assets/paper-advert-figure.png`; a 600px lossless WebP thumbnail is used in the card. It compares regular and feature-splitting hierarchization, bifurcation diagrams and reconstructed trajectories. On mobile, all three card previews appear after the title and author line, before the summary; desktop retains the figure in the left column.

The user subsequently replaced the paper's static preview with `lorenz63_h128_observed_then_predicted_xz.gif`, supplied in a ZIP. The original is preserved unchanged as `assets/paper-lorenz-observed-predicted.gif` and linked from the card. The card displays a 600px lossless animated WebP with the same 160 frames, 17.87-second duration and infinite loop. A still frame is selected for visitors who prefer reduced motion. Regenerate these previews with `python3 scripts/prepare_paper_animation.py` (Pillow required only for conversion). The animation compares ground-truth Lorenz trajectories, previous hierarchical models and the proposed model under observed and out-of-domain conditions. Thesis previews and the separate interactive research animation are unchanged.
