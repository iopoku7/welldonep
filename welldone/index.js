// JavaScript for handling navigation menu

// Function to change the content based on the selected menu item
function changeContent(menuId, pageUrl) {
    const menuItems = document.querySelectorAll(".menu ul li a");

    // Remove the "active" class from all menu items
    menuItems.forEach(item => {
        item.classList.remove("active");
    });

    // Add the "active" class to the selected menu item
    const selectedMenuItem = document.getElementById(menuId);
    if (selectedMenuItem) {
        selectedMenuItem.classList.add("active");
    }

    // Load the content of the selected page
    const contentContainer = document.querySelector(".content-container");
    fetch(pageUrl)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading content: ", error);
        });
}
// JavaScript code for the image slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow-slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + totalSlides) % totalSlides; // Ensure the index is within bounds
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

// Automatically change to the next slide every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 5000);

// Show the first slide initially
showSlide(0);

// Get references to the buttons and the second column
const proposalBtn = document.getElementById("proposalBtn");
const literatureBtn = document.getElementById("literatureBtn");
const dataBtn = document.getElementById("dataBtn");
const collectionBtn = document.getElementById("collectionBtn");
const transcriptBtn = document.getElementById("transcriptBtn");
const manuBtn = document.getElementById("manuBtn");
const marketBtn= document.getElementById("marketBtn");
const planBtn = document.getElementById("planBtn");
const trainBtn = document.getElementById("trainBtn");
const column2Content = document.getElementById("column2Content");

// Define content for each button
const proposalContent = `
    <h3>RESEARCH PROPOSAL</h3>

    <p>Changing the company name to Welldone Research Consult:</p>

    <p>The approach to introducing your dissertation research topic can vary significantly based on the university's requirements. Some prominent universities may necessitate a prospectus, while others may request a precis or a concept paper. There are also institutions with specific initial submission requirements for topic approval.</p>

    <p>At Welldone Research Consult, regardless of the specific format your pre-dissertation materials take, we can provide assistance to ensure that this document serves as a solid foundation, much like a blueprint. This assistance involves:</p>
    <br>
    <ol>
        <li>Discussing the researcher's general interests regarding the study.</li>
        <li>Addressing issues related to sample size and data collection.</li>
        <li>Identifying a current and significant gap in existing research.</li>
        <li>Formulating the problem statement and establishing a theoretical framework.</li>
        <li>Ensuring alignment between the research questions, hypotheses, instrumentation, and sampling plan with the problem statement.</li>
        <li>Determining the most suitable methodological approach.</li>
        <li>Developing a comprehensive prospectus or concept paper.</li>
    </ol>
    <br>

    <p>The primary objectives of this initial discussion are twofold: first, to explore your objectives for your doctoral research, and second, to clarify realistic expectations concerning sample size and data collection to create a viable research proposal. This process involves:</p>

    <ol>
        <li>Reviewing the university's requirements and guidelines.</li>
        <li>Conducting an extensive literature search using resources such as ProQuest, JSTOR, PubMed, ERIC, and EBSCOhost.</li>
        <li>Ensuring that the research questions (and hypotheses), instrumentation, and sampling plan remain aligned with the identified research gap.</li>
        <li>Presenting each foundational element (problem, purpose, research questions, and methodology) in refined academic language.</li>
        <li>Discussing the reviewed literature in the past tense, while presenting the proposed research in the future tense to clearly indicate that the research is pending approval.</li>
    </ol>
`;

// You can now use `proposalContent` as needed in your code.

const literatureContent = `
  <h3>LITERATURE REVIEW</h3>
  <br>

  <p>The literature review has a two-fold purpose: to justify the focus of your study and to provide a rationale for your methodological approach. To do both effectively, you need to engage in considerable synthesis and critical analysis of current research in your field.</p>
  <br>
  <p>Synthesis will allow you to address inconsistencies in existing research and shed light on contradictions that point to the need for your study. You want to avoid summary of individual studies. While discussed in depth, they will ultimately be used to drive an ideas-based argument for your own original research.</p>
  <br>
  <p>Critical analysis is necessary for exploring the strengths and weaknesses of recent studies in your field, particularly as those studies help you to better understand and discuss existing inconsistencies and conflicts. However, and regardless of whether you’re conducting quantitative or qualitative research (or a mixed methods study!), analysis is a critical part of justifying your proposed study’s methodological approach.</p>
  <br>
  <p>We can absolutely tailor this support to meet your current needs and timeline, so please let us know how we can assist.</p>
  <br>
  <p>As a first step, we identify new and additional research by performing targeted keyword searches on large databases such as ProQuest, EBSCOHost, and ScienceDirect, and include full information on the details of what and how we searched for easy replication.</p>
  <br>
  <p>After identifying 75-100 peer-reviewed, scholarly sources for the topic and theoretical or conceptual framework, our next step is to identify relevant themes and sub-themes within current scholarship. This is central to defining a current research gap, and here, we’ll use your study’s foundational elements, and in particular the research questions, as our guide.</p>
  <br>
  <p>We then review the identified research to ensure your argument provides clear support for your proposed research design. As part of this work, we include and analyse sources that, whenever relevant, highlight your methodology as a proven approach within your field–but one that has not been applied effectively or as yet to the specific question your study aims to answer.</p>
  <br>
`;


const methodContent = `
  <h3>METHODOLOGY</h3>
  <br>
  <p>This is the methodology chapter for your research.</p>
  <br>
  <p>In this section, we will outline the methods and approaches employed in your research study.</p>
  <br>
  <p>Methodology plays a critical role in ensuring the validity and reliability of your research findings.</p>
  <br>
  <p>We will discuss the research design, data collection methods, data analysis techniques, and any ethical considerations that are pertinent to your study.</p>
  <br>
  <p>If you have any specific requirements or questions regarding the methodology, please feel free to let us know, and we will tailor our support accordingly.</p>
  <br>
  <p>Our goal is to assist you in developing a robust and well-structured methodology that aligns with the objectives of your research.</p>
  <br>
  <p>Once we have a clear understanding of your research goals, we can work together to craft a methodology that best suits your project.</p>
  <br>
  <p>We are committed to ensuring that your research methodology is sound and in line with the standards of your field.</p>
  <br>
  <p>Please do not hesitate to reach out if you have any questions or need further assistance in this important aspect of your research.</p>
  <br>
`;


const dataContent = `
  <h3>DATA ANALYSIS</h3>
  <br>
  <p>This section covers the data analysis process for your research.</p>
  <br>
  <p>Data analysis is a crucial step in deriving meaningful insights from the information you've collected.</p>
  <br>
  <p>We will discuss the tools, techniques, and methods used to analyze your data.</p>
  <br>
  <p>Our goal is to ensure that your data analysis is rigorous and aligns with the research objectives.</p>
  <br>
  <p>We can tailor our support to match your specific research needs and data analysis requirements.</p>
  <br>
  <p>Whether you are conducting quantitative analysis, qualitative analysis, or a combination of both, we are here to assist you at every stage.</p>
  <br>
  <p>If you have any questions or need guidance on data analysis, please feel free to reach out to us.</p>
  <br>
  <p>We understand the importance of accurate and insightful data analysis in the success of your research project.</p>
  <br>
  <p>Together, we will ensure that your data analysis is conducted with precision and relevance to your research questions.</p>
  <br>
`;


const collectionContent = `
  <h3>DATA COLLECTION</h3>
  <br>
  <p>This section focuses on the data collection process for your research.</p>
  <br>
  <p>Effective data collection is essential for obtaining high-quality and relevant information for your study.</p>
  <br>
  <p>We will discuss the methods, instruments, and procedures used to gather data for your research.</p>
  <br>
  <p>Our aim is to assist you in designing a data collection process that aligns with your research goals and objectives.</p>
  <br>
  <p>If you have specific requirements or questions regarding data collection, please don't hesitate to get in touch with us.</p>
  <br>
  <p>Whether you are conducting surveys, interviews, experiments, or utilizing existing datasets, we are here to provide guidance and support.</p>
  <br>
  <p>We recognize the critical role that accurate and well-structured data collection plays in the success of your research project.</p>
  <br>
  <p>Together, we will ensure that your data collection process is carried out smoothly and effectively.</p>
  <br>
`;


const manuContent = `
  <h3>MANUSCRIPT PUBLISHING</h3>
  <br>
  <p>This section covers the process of publishing your manuscript.</p>
  <br>
  <p>Manuscript publishing is a crucial step in sharing your research findings with the broader academic community.</p>
  <br>
  <p>We will guide you through the steps involved in preparing your manuscript for submission to journals or conferences.</p>
  <br>
  <p>Our goal is to assist you in ensuring that your manuscript meets the required standards and guidelines of your target publication venue.</p>
  <br>
  <p>If you have specific questions or need support with manuscript formatting, citation styles, or choosing the right journal, please feel free to contact us.</p>
  <br>
  <p>Whether you are submitting your manuscript for peer review, revising it based on feedback, or preparing it for final publication, we are here to help.</p>
  <br>
  <p>We understand the significance of effective manuscript publishing in disseminating your research and advancing your academic career.</p>
  <br>
  <p>Together, we will ensure that your manuscript is prepared and presented in a professional and scholarly manner.</p>
  <br>
`;


const transcriptContent = `
  <h3>TRANSCRIPTION</h3>
  <br>
  <p>This section outlines our transcription services.</p>
  <br>
  <p>Transcription is the process of converting spoken language into written text, and it plays a crucial role in various fields, including research, media, and business.</p>
  <br>
  <p>We offer accurate and reliable transcription services to meet your needs.</p>
  <br>
  <p>Whether you have interviews, focus group discussions, lectures, or any other audio or video content that needs to be transcribed, we have you covered.</p>
  <br>
  <p>If you have specific requirements, such as verbatim transcription or time coding, please let us know, and we can customize our services accordingly.</p>
  <br>
  <p>Our team of experienced transcribers is dedicated to providing high-quality transcripts with a quick turnaround time.</p>
  <br>
  <p>We understand the importance of accuracy and confidentiality in transcription, and we take the necessary measures to ensure your content is handled with care.</p>
  <br>
  <p>Whether you are a researcher, journalist, or business professional, our transcription services are designed to make your work easier and more efficient.</p>
  <br>
  <p>Feel free to contact us with your transcription needs, and we will be happy to assist you.</p>
  <br>
`;


const marketContent = `
  <h3>MARKET RESEARCH</h3>
  <br>
  <p>This section provides an overview of our market research services.</p>
  <br>
  <p>Market research is a vital component of business strategy, helping organizations make informed decisions and gain a competitive edge.</p>
  <br>
  <p>We offer comprehensive market research services tailored to your specific needs.</p>
  <br>
  <p>Our experienced team specializes in collecting and analyzing market data to help you understand consumer behavior, industry trends, and market dynamics.</p>
  <br>
  <p>If you require market surveys, competitor analysis, or customer insights, we have the expertise to deliver actionable results.</p>
  <br>
  <p>We can assist you in identifying market opportunities, assessing market demand, and developing effective marketing strategies.</p>
  <br>
  <p>Our commitment to accuracy, thoroughness, and confidentiality ensures that your market research needs are met with professionalism and excellence.</p>
  <br>
  <p>Whether you are a startup looking to enter a new market or an established business seeking to refine your marketing approach, our market research services are designed to support your goals.</p>
  <br>
  <p>Feel free to reach out to us with your market research requirements, and we will work with you to create a customized research plan that aligns with your objectives.</p>
  <br>
`;



const planContent = `
  <h3>BUSINESS PLAN/PROPOSAL</h3>
  <br>
  <p>This section outlines our services for creating a business plan or proposal.</p>
  <br>
  <p>A well-crafted business plan or proposal is essential for attracting investors, securing financing, and guiding the growth of your business.</p>
  <br>
  <p>We specialize in developing comprehensive and compelling business plans and proposals tailored to your unique vision and goals.</p>
  <br>
  <p>Our experienced team can assist you in defining your business objectives, conducting market research, and creating a strategic roadmap for success.</p>
  <br>
  <p>If you need to present your business idea to potential partners, investors, or lenders, we can help you prepare a persuasive proposal that highlights the value and potential of your venture.</p>
  <br>
  <p>Our commitment to accuracy, clarity, and attention to detail ensures that your business plan or proposal is of the highest quality.</p>
  <br>
  <p>Whether you are starting a new venture or seeking to refine your existing business strategy, our services are designed to provide you with a solid foundation for success.</p>
  <br>
  <p>Feel free to contact us to discuss your business plan or proposal needs, and we will work closely with you to create a document that effectively communicates your business vision and objectives.</p>
  <br>
`;



const trainContent = `
  <h3>TRAINING AND DEVELOPMENT</h3>
  <br>
  <p>This section highlights our services for training and development.</p>
  <br>
  <p>Investing in the training and development of your workforce is crucial for building a skilled and competitive team.</p>
  <br>
  <p>We specialize in designing and delivering comprehensive training programs tailored to your organization's specific needs and goals.</p>
  <br>
  <p>Our experienced team can work with you to assess your team's current skills, identify areas for improvement, and create a customized training plan.</p>
  <br>
  <p>Whether you need employee onboarding, leadership development, technical skills training, or any other type of professional development, we have the expertise to meet your requirements.</p>
  <br>
  <p>Our commitment to effective training methodologies, engaging content, and measurable outcomes ensures that your training and development initiatives are successful.</p>
  <br>
  <p>Whether you are a small business or a large organization, our services are designed to enhance the skills and performance of your workforce.</p>
  <br>
  <p>Feel free to reach out to us to discuss your training and development needs, and we will collaborate with you to create a training program that aligns with your organization's objectives and fosters growth.</p>
  <br>
`;




// Add click event listeners to the buttons
proposalBtn.addEventListener("click", () => {
    column2Content.innerHTML = proposalContent;
});
literatureBtn.addEventListener("click", () => {
    column2Content.innerHTML = literatureContent;
});
methodBtn.addEventListener("click", () => {
    column2Content.innerHTML =  methodContent;
});
dataBtn.addEventListener("click", () => {
    column2Content.innerHTML = dataContent;
});
collectionBtn.addEventListener("click", () => {
    column2Content.innerHTML = collectionContent;
});
transcriptBtn.addEventListener("click", () => {
    column2Content.innerHTML = transcriptContent;
});
manuBtn.addEventListener("click", () => {
    column2Content.innerHTML = manuContent;
});
marketBtn.addEventListener("click", () => {
    column2Content.innerHTML = marketContent;
});
planBtn.addEventListener("click", () => {
    column2Content.innerHTML = planContent;
});
trainBtn.addEventListener("click", () => {
    column2Content.innerHTML = trainContent;
});

// Add this code to your index.js file

// Function to change the column text
// Function to change the column text
function changeColumnText(courseName) {
    // Get the element with the id "column2Content" (the column you want to change)
    let column2Content = document.getElementById("column2Content");

    // Define the text content based on the courseName parameter
    let newText = "";

    switch (courseName) {
        case "STATA":
            newText = "STATA: Learn statistical data analysis with STATA software.";
            break;
        case "SPSS":
            newText = "SPSS: Master data analysis using SPSS statistical software.";
            break;
        case "QUALITATIVE DATA ANALYSIS":
            newText = "Qualitative Data Analysis: Explore qualitative research methods.";
            break;
        case "RESEARCH TRAINING":
            newText = "Research Training: Get comprehensive research training.";
            break;
        case "PYTHON":
            newText = "Python: Dive into programming with Python language.";
            break;
        // Add more cases for other courses as needed

        default:
            newText = "Select a course to see details.";
    }

    // Set the new text content for the column
    column2Content.textContent = newText;
}

// Event listeners for each course button
document.getElementById("stataBtn").addEventListener("click", function() {
    changeColumnText("STATA");
});

document.getElementById("spssBtn").addEventListener("click", function() {
    changeColumnText("SPSS");
});

document.getElementById("qualitativeBtn").addEventListener("click", function() {
    changeColumnText("QUALITATIVE DATA ANALYSIS");
});

document.getElementById("trainingBtn").addEventListener("click", function() {
    changeColumnText("RESEARCH TRAINING");
});

document.getElementById("pythonBtn").addEventListener("click", function() {
    changeColumnText("PYTHON");
});

// Add more event listeners for other courses as needed
