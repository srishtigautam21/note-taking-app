import { Navbar, Sidebar, ArchiveNote, Footer } from "../../component";
import { useArchive } from "../../context";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import "./archive.css";
const Archive = () => {
  useDocumentTitle("ArchivePage");
  const { archiveNote } = useArchive();
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />

        <div className='main-content'>
          <h1 className='trash-heading'>Archive</h1>
          <div className='archive-container'>
            {archiveNote.map((archive) => (
              <ArchiveNote key={archive._id} archive={archive} />
            ))}
          </div>
        </div>
        <div className='footer footer-mediaquery'>
          <Footer />
        </div>
      </div>
    </>
  );
};
export { Archive };
