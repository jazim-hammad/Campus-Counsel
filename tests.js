// Ensure the modal is hidden on page load
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("testModal").style.display = "none";
});

function openTestModal(testType) {
  const urlMap = {
    depressionTest:
      "https://screening.mhanational.org/screening-tools/depression/?ref&layout=mhats,actions_a",
    anxietyTest:
      "https://screening.mhanational.org/screening-tools/anxiety/?ref",
    adhdTest: "https://screening.mhanational.org/screening-tools/adhd/?ref",
    bipolarTest:
      "https://screening.mhanational.org/screening-tools/bipolar/?ref",
    psychosisTest:
      "https://screening.mhanational.org/screening-tools/psychosis/?ref",
    ptsdTest: "https://screening.mhanational.org/screening-tools/ptsd/?ref",
    eatingDisorderTest:
      "https://screening.mhanational.org/screening-tools/eating-disorder/?ref",
    addictionTest:
      "https://screening.mhanational.org/screening-tools/addiction/?ref",
    youthMentalHealthTest:
      "https://screening.mhanational.org/screening-tools/youth/?ref",
  };
  document.getElementById("testIframe").src = urlMap[testType];
  document.getElementById("testModal").style.display = "block";
}

function closeTestModal() {
  document.getElementById("testModal").style.display = "none";
  document.getElementById("testIframe").src = ""; // Clear the iframe source to stop any video/audio/etc.
}
