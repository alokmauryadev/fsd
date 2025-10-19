// Interactive Notes Application
class NotesApp {
    constructor() {
        this.chapters = chaptersData;
        this.expandedChapters = new Set();
        this.init();
    }

    init() {
        this.generateTableOfContents();
        this.generateChapters();
        this.bindEvents();
    }

    generateTableOfContents() {
        const tocContainer = document.getElementById('toc');
        tocContainer.innerHTML = this.chapters.map(chapter => `
            <div class="bg-white border border-gray-200 rounded-lg p-3 hover:border-${chapter.color}-300 transition-colors cursor-pointer"
                 onclick="notesApp.scrollToChapter(${chapter.id})">
                <div class="flex items-center space-x-2">
                    <span class="text-lg">${chapter.icon}</span>
                    <div>
                        <h4 class="font-medium text-gray-800 text-sm">${chapter.title}</h4>
                        <p class="text-xs text-gray-500">Click to navigate</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    generateChapters() {
        const container = document.getElementById('chaptersContainer');
        container.innerHTML = this.chapters.map(chapter => `
            <div class="chapter-card bg-white rounded-xl shadow-lg overflow-hidden" data-chapter-id="${chapter.id}">
                <div class="bg-${chapter.color}-500 text-white p-4 cursor-pointer hover:bg-${chapter.color}-600 transition-colors"
                     onclick="notesApp.toggleChapter(${chapter.id})">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <span class="text-xl">${chapter.icon}</span>
                            <h2 class="text-xl font-bold">Chapter ${chapter.id}: ${chapter.title}</h2>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="chapter-status text-sm opacity-75">Click to expand</span>
                            <svg class="w-5 h-5 transform transition-transform duration-200 chapter-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="chapter-content hidden p-6">
                    <div class="prose max-w-none">
                        ${chapter.content}
                    </div>
                    <div class="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                        <button class="bg-${chapter.color}-100 text-${chapter.color}-700 px-3 py-1 rounded-lg text-sm hover:bg-${chapter.color}-200 transition-colors"
                                onclick="notesApp.markAsComplete(${chapter.id})">
                            Mark as Complete
                        </button>
                        <div class="flex space-x-2">
                            <button class="text-gray-500 hover:text-gray-700 p-1" onclick="notesApp.copyChapter(${chapter.id})" title="Copy Chapter">
                                📋
                            </button>
                            <button class="text-gray-500 hover:text-gray-700 p-1" onclick="notesApp.printChapter(${chapter.id})" title="Print Chapter">
                                🖨️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    bindEvents() {
        // Expand/Collapse all buttons
        document.getElementById('expandAll').addEventListener('click', () => {
            this.expandAllChapters();
        });

        document.getElementById('collapseAll').addEventListener('click', () => {
            this.collapseAllChapters();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'a':
                        e.preventDefault();
                        this.expandAllChapters();
                        break;
                    case 's':
                        e.preventDefault();
                        this.collapseAllChapters();
                        break;
                }
            }
        });
    }

    toggleChapter(chapterId) {
        const chapterCard = document.querySelector(`[data-chapter-id="${chapterId}"]`);
        if (!chapterCard) return;

        const content = chapterCard.querySelector('.chapter-content');
        const arrow = chapterCard.querySelector('.chapter-arrow');
        const status = chapterCard.querySelector('.chapter-status');

        if (content.classList.contains('hidden')) {
            this.expandChapter(chapterId, content, arrow, status);
        } else {
            this.collapseChapter(chapterId, content, arrow, status);
        }
    }

    expandChapter(chapterId, content, arrow, status) {
        content.classList.remove('hidden');
        arrow.classList.add('rotate-180');
        status.textContent = 'Click to collapse';
        this.expandedChapters.add(chapterId);

        // Add expanded class for animation
        content.classList.add('animate-fadeIn');
        setTimeout(() => content.classList.remove('animate-fadeIn'), 300);
    }

    collapseChapter(chapterId, content, arrow, status) {
        content.classList.add('hidden');
        arrow.classList.remove('rotate-180');
        status.textContent = 'Click to expand';
        this.expandedChapters.delete(chapterId);
    }

    expandAllChapters() {
        this.chapters.forEach(chapter => {
            const chapterCard = document.querySelector(`[data-chapter-id="${chapter.id}"]`);
            if (chapterCard) {
                const content = chapterCard.querySelector('.chapter-content');
                const arrow = chapterCard.querySelector('.chapter-arrow');
                const status = chapterCard.querySelector('.chapter-status');

                this.expandChapter(chapter.id, content, arrow, status);
            }
        });
    }

    collapseAllChapters() {
        this.chapters.forEach(chapter => {
            const chapterCard = document.querySelector(`[data-chapter-id="${chapter.id}"]`);
            if (chapterCard) {
                const content = chapterCard.querySelector('.chapter-content');
                const arrow = chapterCard.querySelector('.chapter-arrow');
                const status = chapterCard.querySelector('.chapter-status');

                this.collapseChapter(chapter.id, content, arrow, status);
            }
        });
    }

    scrollToChapter(chapterId) {
        const chapterCard = document.querySelector(`[data-chapter-id="${chapterId}"]`);
        if (chapterCard) {
            chapterCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Auto-expand if collapsed
            if (!this.expandedChapters.has(chapterId)) {
                this.toggleChapter(chapterId);
            }
        }
    }

    markAsComplete(chapterId) {
        const chapter = this.chapters.find(c => c.id === chapterId);
        if (chapter) {
            const button = document.querySelector(`[data-chapter-id="${chapterId}"]`).querySelector('button');
            const originalText = button.textContent;

            button.textContent = '✅ Completed!';
            button.classList.add('bg-green-500', 'text-white');
            button.classList.remove(`bg-${chapter.color}-100`, `text-${chapter.color}-700`);

            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('bg-green-500', 'text-white');
                button.classList.add(`bg-${chapter.color}-100`, `text-${chapter.color}-700`);
            }, 2000);

            // Show progress
            const completedCount = this.expandedChapters.size;
            this.showProgress(completedCount, this.chapters.length);
        }
    }

    showProgress(completed, total) {
        const percentage = Math.round((completed / total) * 100);

        // Create or update progress notification
        let progressDiv = document.querySelector('.progress-notification');
        if (!progressDiv) {
            progressDiv = document.createElement('div');
            progressDiv.className = 'progress-notification fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform transition-all duration-300';
            document.body.appendChild(progressDiv);
        }

        progressDiv.textContent = `Progress: ${completed}/${total} chapters (${percentage}%)`;
        progressDiv.classList.remove('translate-x-full');

        setTimeout(() => {
            progressDiv.classList.add('translate-x-full');
        }, 3000);
    }

    copyChapter(chapterId) {
        const chapter = this.chapters.find(c => c.id === chapterId);
        if (chapter) {
            const content = chapterCard.querySelector('.chapter-content');
            const textToCopy = `Chapter ${chapter.id}: ${chapter.title}\n\n${content.textContent}`;

            navigator.clipboard.writeText(textToCopy).then(() => {
                this.showNotification('Chapter copied to clipboard!', 'success');
            }).catch(() => {
                this.showNotification('Failed to copy chapter', 'error');
            });
        }
    }

    printChapter(chapterId) {
        const chapter = this.chapters.find(c => c.id === chapterId);
        if (chapter) {
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Chapter ${chapter.id}: ${chapter.title}</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        .code-block { background: #f3f4f6; padding: 15px; margin: 10px 0; border-radius: 5px; }
                        .highlight { background: #fef3c7; padding: 2px 4px; border-radius: 3px; }
                        h1 { color: #1f2937; }
                        h2 { color: #374151; margin-top: 30px; }
                        h3 { color: #4b5563; margin-top: 20px; }
                    </style>
                </head>
                <body>
                    <h1>${chapter.icon} Chapter ${chapter.id}: ${chapter.title}</h1>
                    <div>${chapter.content}</div>
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }
    }

    printAllChapters() {
        const printWindow = window.open('', '_blank');
        const allContent = this.chapters.map(chapter => `
            <div style="page-break-before: always; margin: 20px 0;">
                <h1>${chapter.icon} Chapter ${chapter.id}: ${chapter.title}</h1>
                <div>${chapter.content}</div>
            </div>
        `).join('');

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>JavaScript Study Notes - Complete</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .code-block { background: #f3f4f6; padding: 15px; margin: 10px 0; border-radius: 5px; }
                    .highlight { background: #fef3c7; padding: 2px 4px; border-radius: 3px; }
                    h1 { color: #1f2937; page-break-after: avoid; }
                    h2 { color: #374151; margin-top: 30px; }
                    h3 { color: #4b5563; margin-top: 20px; }
                    @media print {
                        body { margin: 10px; }
                    }
                </style>
            </head>
            <body>
                <h1 style="text-align: center; margin-bottom: 30px;">📚 Complete JavaScript Study Notes</h1>
                ${allContent}
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 ${
            type === 'success' ? 'bg-green-500' :
            type === 'error' ? 'bg-red-500' : 'bg-blue-500'
        } text-white`;

        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('opacity-0');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Code block highlighting and copy functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add copy buttons to code blocks
    document.querySelectorAll('.code-block').forEach((block, index) => {
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '📋';
        copyButton.className = 'absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-xs hover:bg-gray-600 transition-colors';
        copyButton.title = 'Copy code';
        copyButton.onclick = () => {
            const code = block.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    copyButton.textContent = '✅';
                    setTimeout(() => copyButton.innerHTML = '📋', 2000);
                });
            }
        };

        block.classList.add('relative');
        block.appendChild(copyButton);
    });

    // Add syntax highlighting for keywords
    document.querySelectorAll('code').forEach(codeBlock => {
        const keywords = ['const', 'let', 'var', 'function', 'if', 'else', 'for', 'while', 'return', 'class', 'extends', 'async', 'await', 'try', 'catch', 'console.log'];
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            codeBlock.innerHTML = codeBlock.innerHTML.replace(regex, `<span class="text-blue-600 font-semibold">${keyword}</span>`);
        });

        // Highlight strings
        codeBlock.innerHTML = codeBlock.innerHTML.replace(/(["'])(.*?)\1/g, '<span class="text-green-600">$1$2$1</span>');

        // Highlight comments
        codeBlock.innerHTML = codeBlock.innerHTML.replace(/\/\/(.*)/g, '<span class="text-gray-500">\/\/$1</span>');
    });
});

// Initialize the notes app
const notesApp = new NotesApp();

// Make functions globally available for onclick handlers
window.notesApp = notesApp;