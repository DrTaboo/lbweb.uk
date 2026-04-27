---
title: "Portfolio of Lewis ███████"
description: "The portfolio of Lewis ███████: His photography, research papers, projects, and more!"
keywords: ["Lewis", "photography", "enigma", "personal site", "portfolio", "lbweb", "uk"]
---

## My current projects

<style>
.projects-outer {
  margin: 0 -215px;
}
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 40px 0;
}
@media (max-width: 1024px) {
  .projects-outer {
    margin: 0;
  }
}
@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="projects-outer">
<div class="projects-grid">

<!-- ============================================================
     CARD 1: Research project - ENIGMA
     ============================================================ -->
<div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 25px; backdrop-filter: blur(10px);">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
<h3 style="margin: 0; color: #f43f5e;">Enigma: The Code and the Crack</h3>
<!-- UPDATE: Change label text below when % changes -->
<span style="font-size: 0.8rem; background: #f43f5e; color: white; padding: 4px 12px; border-radius: 20px; font-weight: bold; white-space: nowrap; margin-left: 10px;">55% Complete</span>
</div>
<p style="font-size: 0.95rem; margin-bottom: 20px; color: #d1d5db;">Investigating the history of Enigma, it's inner-workings, it's operation during World War II, and the statistical breakthroughs at Bletchley Park.</p>
<div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
<span style="font-size: 0.75rem; border: 1px solid #f43f5e; color: #f43f5e; padding: 2px 8px; border-radius: 5px;">Research</span>
<span style="font-size: 0.75rem; border: 1px solid #f43f5e; color: #f43f5e; padding: 2px 8px; border-radius: 5px;">Writing</span>
<span style="font-size: 0.75rem; border: 1px solid #f43f5e; color: #f43f5e; padding: 2px 8px; border-radius: 5px;">Documentation</span>
</div>
<div style="width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
<!-- UPDATE: Change width % below to match new completion percentage -->
<div style="width: 55%; height: 100%; background: #f43f5e; box-shadow: 0 0 10px #f43f5e;"></div>
</div>
</div>

<!-- ============================================================
     CARD 2: lbweb.uk Website
     ============================================================ -->
<div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 25px; backdrop-filter: blur(10px);">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
<h3 style="margin: 0; color: #f43f5e;">lbweb.uk Website</h3>
<!-- UPDATE: Change label text and background colour if status changes
     Green #10b981 = Live, Red #f43f5e = In Progress, Grey #6b7280 = Paused -->
<span style="font-size: 0.8rem; background: #10b981; color: white; padding: 4px 12px; border-radius: 20px; font-weight: bold; white-space: nowrap; margin-left: 10px;">Live & Deploying</span>
</div>
<p style="font-size: 0.95rem; margin-bottom: 20px; color: #d1d5db;">A custom-built personal website using <strong>Hugo</strong> and the <strong>Blowfish</strong> theme. Automated deployment via <strong>GitHub Actions</strong> and hosted on a personal server.</p>
<div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
<span style="font-size: 0.75rem; border: 1px solid #f43f5e; color: #f43f5e; padding: 2px 8px; border-radius: 5px;">Hugo</span>
<span style="font-size: 0.75rem; border: 1px solid #f43f5e; color: #f43f5e; padding: 2px 8px; border-radius: 5px;">Website</span>
<span style="font-size: 0.75rem; border: 1px solid #f43f5e; color: #f43f5e; padding: 2px 8px; border-radius: 5px;">HTML</span>
<span style="font-size: 0.75rem; border: 1px solid #f43f5e; color: #f43f5e; padding: 2px 8px; border-radius: 5px;">CSS</span>
</div>
<div style="width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
<!-- UPDATE: Change width % below to match new completion percentage -->
<div style="width: 90%; height: 100%; background: #10b981; box-shadow: 0 0 10px #10b981;"></div>
</div>
</div>

<!-- ============================================================
     FUTURE CARDS: Copy a card block from above and paste it here.
     The grid will automatically place them two per row.
     ============================================================ -->

</div>

## Photography

<div style="position: relative; width: 100%; height: 300px; border-radius: 15px; overflow: hidden; margin: 40px 0; isolation: isolate;">
<img src="/photography/20240728-_MG_2124.jpg" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; border-radius: 15px;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
<div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; border-radius: 15px;">
<h3 style="color: white; margin: 0;">Captured Moments</h3>
<p style="color: rgba(255,255,255,0.8); margin: 10px 0 20px 0;">Exploring the world through a Canon 1000D.</p>
<a href="/photography" style="width: fit-content; background: white; color: black; padding: 10px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 0.9rem;">View Full Gallery</a>
</div>
</div>

<!-- ============================================================
     RECENT BLOG POSTS
     ============================================================ -->

{{< list limit=3 where="Section" value="blog" >}}