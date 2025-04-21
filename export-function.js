// Lưu ý: sử dụng nó ở trang about:blank và tiến vô F12 [console]
// 1. Dán toàn bộ blob HTML của bạn vào rawHtml:
const rawHtml = `
<a href="https://www.hackerrank.com/dangkhoa2004" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white" alt="HackerRank Badge">
</a>
<a href="https://leetcode.com/dangkhoa2004/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white" alt="LeetCode Badge">
</a>
<a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=about.me&logoColor=white" alt="Portfolio Badge">
</a>
<a href="https://github.com/dangkhoa2004" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge">
</a>
<a href="https://stackoverflow.com/users/your-id" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/StackOverflow-FE7A16?style=for-the-badge&logo=stackoverflow&logoColor=white" alt="StackOverflow Badge">
</a>
<a href="https://codepen.io/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white" alt="CodePen Badge">
</a>
<a href="https://www.codewars.com/users/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=codewars&logoColor=white" alt="Codewars Badge">
</a>
<a href="https://replit.com/@your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Replit-667881?style=for-the-badge&logo=replit&logoColor=white" alt="Replit Badge">
</a>
<a href="https://www.kaggle.com/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white" alt="Kaggle Badge">
</a>
<a href="https://www.coursera.org/user/your-profile" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Coursera-0056D2?style=for-the-badge&logo=coursera&logoColor=white" alt="Coursera Badge">
</a>
<a href="https://www.udemy.com/user/your-profile" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Udemy-A435F0?style=for-the-badge&logo=udemy&logoColor=white" alt="Udemy Badge">
</a>
<a href="https://www.behance.net/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white" alt="Behance Badge">
</a>
<a href="https://www.fiverr.com/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Fiverr-1DBF73?style=for-the-badge&logo=fiverr&logoColor=white" alt="Fiverr Badge">
</a>

<a href="https://www.upwork.com/freelancers/~your-id" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Upwork-6fda44?style=for-the-badge&logo=upwork&logoColor=white" alt="Upwork Badge">
</a>
<a href="https://hashnode.com/@your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white" alt="Hashnode Badge">
</a>
<a href="https://medium.com/@your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium Badge">
</a>
<a href="https://gdsc.community.dev/u/your-username/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/GDSC-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="GDSC Badge">
</a>
<a href="https://huggingface.co/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/HuggingFace-FFD21F?style=for-the-badge&logo=huggingface&logoColor=black" alt="Hugging Face Badge">
</a>
<a href="https://wandb.ai/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Weights_&_Biases-FFBE00?style=for-the-badge&logo=weightsandbiases&logoColor=black" alt="WandB Badge">
</a>
<a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white" alt="Unity Badge">
</a>
<a href="https://www.figma.com/@your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Badge">
</a>
<a href="https://discord.com/users/your-id" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord Badge">
</a>
<a href="https://your-workspace.slack.com" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack Badge">
</a>
<a href="https://dribbble.com/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" alt="Dribbble Badge">
<a href="https://www.pinterest.com/your-username/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Pinterest-BD081C?style=for-the-badge&logo=pinterest&logoColor=white" alt="Pinterest Badge">
</a>
<a href="https://scholar.google.com/citations?user=your-id" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Google_Scholar-4285F4?style=for-the-badge&logo=googlescholar&logoColor=white" alt="Google Scholar Badge">
</a>
<a href="https://www.researchgate.net/profile/your-name" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/ResearchGate-00CCBB?style=for-the-badge&logo=researchgate&logoColor=white" alt="ResearchGate Badge">
</a>
<a href="https://wellfound.com/u/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Wellfound-000000?style=for-the-badge&logo=angellist&logoColor=white" alt="AngelList Badge">
</a>
<a href="https://www.linkedin.com/learning/me" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/LinkedIn%20Learning-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Learning Badge">
</a>
<a href="https://hub.docker.com/u/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Badge">
</a>
<a href="https://www.notion.so/yourworkspace" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge">
</a>
<a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Obsidian-483699?style=for-the-badge&logo=obsidian&logoColor=white" alt="Obsidian Badge">
</a>
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions Badge">
<a href="https://app.netlify.com/teams/yourname" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify Badge">
</a>
<a href="https://vercel.com/yourusername" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Badge">
</a>
<a href="https://zapier.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Zapier-FF4A00?style=for-the-badge&logo=zapier&logoColor=white" alt="Zapier Badge">
</a>
<a href="https://ifttt.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/IFTTT-000000?style=for-the-badge&logo=ifttt&logoColor=white" alt="IFTTT Badge">
</a>
<a href="https://open.spotify.com/show/yourpodcast" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Spotify_Podcast-1DB954?style=for-the-badge&logo=spotify&logoColor=white" alt="Spotify Podcast Badge">
</a>
<a href="https://anchor.fm/yourshow" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Anchor-5000b9?style=for-the-badge&logo=anchor&logoColor=white" alt="Anchor Badge">
</a>
<a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Badge">
</a>
<a href="https://runwayml.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/RunwayML-FF0070?style=for-the-badge&logo=runway&logoColor=white" alt="RunwayML Badge">
</a>
<a href="https://gitcoin.co/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Gitcoin-3466E8?style=for-the-badge&logo=gitcoin&logoColor=white" alt="Gitcoin Badge">
</a>
<a href="https://dappradar.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/DappRadar-0D61FE?style=for-the-badge&logo=dappradar&logoColor=white" alt="DappRadar Badge">
</a>
<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/W3Schools-04AA6D?style=for-the-badge&logo=w3schools&logoColor=white" alt="W3Schools Badge">
</a>
<a href="https://www.freecodecamp.org/yourusername" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/freeCodeCamp-0A0A23?style=for-the-badge&logo=freecodecamp&logoColor=white" alt="freeCodeCamp Badge">
</a>
<a href="https://www.geeksforgeeks.org/user-profile" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/GeeksforGeeks-2F8D46?style=for-the-badge&logo=geeksforgeeks&logoColor=white" alt="GeeksforGeeks Badge">
</a>
<a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white" alt="Android Studio Badge">
</a>
<a href="https://expo.dev/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo Badge">
</a>
<a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter Badge">
</a>
<a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux Badge">
</a>
<a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" alt="Ubuntu Badge">
</a>
<a href="https://learn.microsoft.com/en-us/windows/terminal/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Windows_Terminal-4D4D4D?style=for-the-badge&logo=windows&logoColor=white" alt="Windows Terminal Badge">
</a>
<a href="https://trello.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" alt="Trello Badge">
</a>
<a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge">
</a>
<a href="https://clickup.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/ClickUp-7B68EE?style=for-the-badge&logo=clickup&logoColor=white" alt="ClickUp Badge">
</a>
<a href="https://github.com/KoboldAI/KoboldAI-Client" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/KoboldAI-2A2A2A?style=for-the-badge&logo=openai&logoColor=white" alt="KoboldAI Badge">
</a>
<a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Claude.ai-101010?style=for-the-badge&logo=openai&logoColor=white" alt="Claude AI Badge">
</a>
<a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Perplexity-2E2E2E?style=for-the-badge&logo=perplexity&logoColor=white" alt="Perplexity Badge">
</a>
<a href="https://www.reddit.com/user/yourusername" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white" alt="Reddit Badge">
</a>
<a href="https://stackexchange.com/users/your-id" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/StackExchange-1E5397?style=for-the-badge&logo=stackexchange&logoColor=white" alt="StackExchange Badge">
</a>
<a href="https://www.producthunt.com/@yourusername" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Product_Hunt-DA552F?style=for-the-badge&logo=producthunt&logoColor=white" alt="Product Hunt Badge">
</a>
<a href="https://www.twitch.tv/yourchannel" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" alt="Twitch Badge">
</a>
<a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/OBS_Studio-302E31?style=for-the-badge&logo=obsstudio&logoColor=white" alt="OBS Studio Badge">
</a>

`;

// 2. Sử dụng vùng chứa tạm thời thay vì DOMParser:
const container = document.createElement("template");
// .template.content cho phép chúng ta truy vấn mà không cần chạm vào DOM có thể nhìn thấy
container.innerHTML = rawHtml;
const imgs = Array.from(container.content.querySelectorAll("img"));

// 3. Xây dựng mảng JSON của bạn chính xác như trước:
const badges = imgs.map((img, i) => {
  const link = img.closest("a");
  const srcHtml = img.src.replace(/&/g, "&amp;");
  const html = link
    ? `<a href="${link.href}" rel="noopener noreferrer" target="_blank">\n<img alt="${img.alt}" src="${srcHtml}"/>\n</a>`
    : `<img alt="${img.alt}" src="${srcHtml}"/>`;

  return {
    id: `badge-${i + 1}`,
    name: img.alt,
    category: "Badges",
    thumbnail: img.src,
    html,
    css: "",
    js: "",
  };
});

// 4. Kích hoạt tải xuống tệp JSON:
const jsonString = JSON.stringify(badges, null, 2);
const blob = new Blob([jsonString], { type: "application/json" });
const url = URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download = "badges.json";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
