import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Common.css';
const Pagination = ({ currentPage, totalPages, onPageChange, targetId }) => {
    if (totalPages <= 1) return null;

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    if (endPage - startPage < 2) {
        startPage = Math.max(1, endPage - 2);
    }

    const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    const handlePageChange = (newPage) => {
        onPageChange(newPage);

        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Default behavior if no targetId is provided: scroll to top of window
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="pagination-container">
            <button
                className="btn-outline pagination-nav-btn"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                <ChevronLeft size={18} /> Prev
            </button>

            <div className="pagination-pages-group">
                {visiblePages.map(page => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`pagination-page-btn ${currentPage === page ? 'active' : ''}`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                className="btn-outline pagination-nav-btn"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next <ChevronRight size={18} />
            </button>
        </div>
    );
};

export default Pagination;
