import Layout from "../../components/layout/Layout";

const NeedsModification = () => {
  const modifications = [
    { id: 1, text: "Please change the background color to blue." },
    { id: 2, text: "Increase the font size of the headings." },
    { id: 3, text: "Add a new section for customer reviews." },
    {
      id: 4,
      text: "Update the navigation menu to include a dropdown for categories.",
    },
    {
      id: 5,
      text: "Improve the responsiveness of the website for mobile devices.",
    },
    { id: 6, text: "Add a dark mode toggle button." },
    { id: 7, text: "Optimize images for faster loading times." },
    {
      id: 8,
      text: "Include a search bar in the header for better user experience.",
    },
    { id: 9, text: "Add a call-to-action button on the homepage." },
    { id: 10, text: "Fix the alignment issues in the footer section." },
  ];

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="flex items-center justify-center p-4 mt-3">
          <h2 className="text-3xl font-bold mb-4 text_secondary">
            Needs Modification
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Modifications List</h3>
            {modifications.length > 0 ? (
              <ul className="space-y-4">
                {modifications.map((modification) => (
                  <li
                    key={modification.id}
                    className="border-b pb-2 flex gap-1"
                  >
                    <span>{modification.id}:</span>{" "}
                    <p className="text-gray-700">{modification.text}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No modifications requested yet.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NeedsModification;
