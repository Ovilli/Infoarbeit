// Quiz Data
const quizData = [
    // 1. Multiple Choice
    {
        type: 'multiple-choice',
        question: 'Wer hat Git entwickelt?',
        options: [
            'Linus Torvalds',
            'Bill Gates',
            'Steve Jobs',
            'Mark Zuckerberg'
        ],
        correctAnswer: 0
    },
    
    // 2. Multiple Choice
    {
        type: 'multiple-choice',
        question: 'Was zeigt das Vorhandensein eines .git-Verzeichnisses an?',
        options: [
            'Das Verzeichnis ist geschützt',
            'Das Verzeichnis ist leer',
            'Das aktuelle Verzeichnis befindet sich in einem Git-Repository',
            'Das Verzeichnis kann nicht gelöscht werden'
        ],
        correctAnswer: 2
    },
    
    // 3. Text Input
    {
        type: 'text-input',
        question: 'Mit welchem Befehl initialisierst du ein neues Git-Repository?',
        inputs: [
            { label: 'Befehl (ohne Argumente)', placeholder: 'z.B. git ...', correctAnswer: 'git init' }
        ]
    },
    
    // 4. Multiple Selection (Checkboxes)
    {
        type: 'checkbox',
        question: 'Welche der folgenden sind Git-Objekttypen? (Mehrfachauswahl)',
        options: [
            'Blob',
            'Tree',
            'Commit',
            'Branch',
            'Remote',
            'Tag'
        ],
        correctAnswers: [0, 1, 2]
    },
    
    // 5. Text Input
    {
        type: 'text-input',
        question: 'Fülle die Lücken aus:',
        inputs: [
            { label: 'Befehl zum Hinzufügen einer Datei zur Staging Area', placeholder: 'git ...', correctAnswer: 'git add' },
            { label: 'Befehl zum Erstellen eines Commits', placeholder: 'git ...', correctAnswer: 'git commit' }
        ]
    },
    
    // 6. Multiple Choice
    {
        type: 'multiple-choice',
        question: 'Was ist die "Staging Area" in Git?',
        options: [
            'Ein Bereich zum Testen von Code',
            'Ein Zwischenspeicher für Änderungen vor dem Commit',
            'Ein Backup-Ordner',
            'Eine Liste aller Branches'
        ],
        correctAnswer: 1
    },
    
    // 7. Strikethrough - False Statements
    {
        type: 'strikethrough',
        question: 'Streiche alle FALSCHEN Aussagen durch:',
        items: [
            { text: 'Mit git status kann man den aktuellen Status des Repositories überprüfen', isWrong: false },
            { text: 'Untracked Dateien werden automatisch beim nächsten Commit hinzugefügt', isWrong: true },
            { text: 'Die Option -m bei git commit wird verwendet, um eine Commit-Nachricht anzugeben', isWrong: false },
            { text: 'Git löscht alte Commits automatisch nach 30 Tagen', isWrong: true },
            { text: 'Mit git diff kann man Änderungen im Arbeitsverzeichnis sehen', isWrong: false }
        ]
    },
    
    // 8. Matching
    {
        type: 'matching',
        question: 'Ordne die Git-Befehle ihrer Funktion zu:',
        leftItems: [
            { id: 1, text: 'git mv' },
            { id: 2, text: 'git log' },
            { id: 3, text: 'git checkout' },
            { id: 4, text: 'git branch' }
        ],
        rightItems: [
            { id: 'a', text: 'Zeigt die Commit-Historie an', matchId: 2 },
            { id: 'b', text: 'Wechselt zu einem Branch oder Commit', matchId: 3 },
            { id: 'c', text: 'Benennt eine Datei um', matchId: 1 },
            { id: 'd', text: 'Erstellt einen neuen Branch', matchId: 4 }
        ]
    },
    
    // 9. Multiple Choice
    {
        type: 'multiple-choice',
        question: 'Was bedeutet "detached HEAD" in Git?',
        options: [
            'Der HEAD wurde gelöscht',
            'HEAD zeigt nicht auf einen Branch, sondern direkt auf einen Commit',
            'Das Repository ist beschädigt',
            'Man kann keine Commits mehr erstellen'
        ],
        correctAnswer: 1
    },
    
    // 10. Text Input
    {
        type: 'text-input',
        question: 'Vervollständige die Befehle:',
        inputs: [
            { label: 'Befehl um einen neuen Branch "feature" zu erstellen', placeholder: 'git ...', correctAnswer: 'git branch feature' },
            { label: 'Befehl um zu diesem Branch zu wechseln', placeholder: 'git ...', correctAnswer: 'git checkout feature' }
        ]
    },
    
    // 11. Connection
    {
        type: 'connection',
        question: 'Verbinde die Git-Konzepte mit ihrer Beschreibung:',
        leftItems: [
            { id: 1, text: 'Blob' },
            { id: 2, text: 'Tree' },
            { id: 3, text: 'Commit' },
            { id: 4, text: 'HEAD' },
            { id: 5, text: 'Branch' }
        ],
        rightItems: [
            { id: 'a', text: 'Zeiger auf den aktuellen Commit', matchId: 4 },
            { id: 'b', text: 'Repräsentiert den Inhalt einer Datei', matchId: 1 },
            { id: 'c', text: 'Snapshot des Repositories', matchId: 3 },
            { id: 'd', text: 'Zeiger auf einen Commit', matchId: 5 },
            { id: 'e', text: 'Repräsentiert ein Verzeichnis', matchId: 2 }
        ]
    },
    
    // 12. Multiple Choice
    {
        type: 'multiple-choice',
        question: 'Welche Dateien sollten in eine .gitignore Datei aufgenommen werden?',
        options: [
            'Alle Quelldateien',
            'Ausführbare Dateien und temporäre Dateien',
            'README-Dateien',
            'Git-Konfigurationsdateien'
        ],
        correctAnswer: 1
    },
    
    // 13. Checkbox
    {
        type: 'checkbox',
        question: 'Welche Aussagen über Git Branches sind korrekt? (Mehrfachauswahl)',
        options: [
            'Branches erlauben isoliertes Arbeiten an neuen Features',
            'Der main-Branch ist der Standard-Branch',
            'Branches können zusammengeführt (gemerged) werden',
            'Man kann nur einen Branch pro Repository haben',
            'Branches sind nur temporär und werden automatisch gelöscht'
        ],
        correctAnswers: [0, 1, 2]
    },
    
    // 14. Text Input
    {
        type: 'text-input',
        question: 'Befehl-Kombinationen:',
        inputs: [
            { label: 'Befehl zum Zusammenführen des feature-Branch in den aktuellen Branch', placeholder: 'git ...', correctAnswer: 'git merge feature' },
            { label: 'Befehl zum Löschen des feature-Branch', placeholder: 'git ...', correctAnswer: 'git branch -d feature' }
        ]
    },
    
    // 15. Strikethrough
    {
        type: 'strikethrough',
        question: 'Streiche alle FALSCHEN Aussagen über Git Remotes durch:',
        items: [
            { text: 'Ein Remote ist eine Kopie des Repositories an einer anderen Stelle', isWrong: false },
            { text: 'origin ist ein beliebiger Name und kein Standard', isWrong: true },
            { text: 'Mit git push werden Änderungen zum Remote-Repository gesendet', isWrong: false },
            { text: 'git clone erstellt eine lokale Kopie eines Remote-Repositories', isWrong: false },
            { text: 'Man kann nur mit einem Remote-Repository gleichzeitig arbeiten', isWrong: true }
        ]
    },
    
    // 16. Multiple Choice
    {
        type: 'multiple-choice',
        question: 'Was bewirkt die Option -u bei git push?',
        options: [
            'Löscht den Remote-Branch',
            'Richtet eine Tracking-Verbindung zwischen lokalem und Remote-Branch ein',
            'Pusht nur untracked Dateien',
            'Erstellt einen neuen Branch'
        ],
        correctAnswer: 1
    },
    
    // 17. Connection
    {
        type: 'connection',
        question: 'Verbinde die Git-Befehle mit ihrer Funktion:',
        leftItems: [
            { id: 1, text: 'git pull' },
            { id: 2, text: 'git push' },
            { id: 3, text: 'git clone' },
            { id: 4, text: 'git remote add' },
            { id: 5, text: 'git fetch' }
        ],
        rightItems: [
            { id: 'a', text: 'Sendet Commits zum Remote-Repository', matchId: 2 },
            { id: 'b', text: 'Holt Änderungen vom Remote und merged sie', matchId: 1 },
            { id: 'c', text: 'Fügt ein neues Remote-Repository hinzu', matchId: 4 },
            { id: 'd', text: 'Erstellt eine lokale Kopie eines Repositories', matchId: 3 },
            { id: 'e', text: 'Holt Änderungen ohne zu mergen', matchId: 5 }
        ]
    },
    
    // 18. Multiple Choice
    {
        type: 'multiple-choice',
        question: 'Was passiert bei einem Merge-Konflikt?',
        options: [
            'Git wählt automatisch die neuere Version',
            'Das Repository wird beschädigt',
            'Git markiert die Konfliktbereiche und man muss sie manuell lösen',
            'Alle Änderungen werden verworfen'
        ],
        correctAnswer: 2
    },
    
    // 19. Matching
    {
        type: 'matching',
        question: 'Ordne die Merge-Strategien zu:',
        leftItems: [
            { id: 1, text: 'pull.rebase false' },
            { id: 2, text: 'pull.rebase true' },
            { id: 3, text: 'pull.ff only' }
        ],
        rightItems: [
            { id: 'a', text: 'Standard-Merge-Strategie', matchId: 1 },
            { id: 'b', text: 'Nur Fast-Forward-Merges', matchId: 3 },
            { id: 'c', text: 'Rebase-Strategie', matchId: 2 }
        ]
    },
    
    // 20. Checkbox
    {
        type: 'checkbox',
        question: 'Welche Schritte gehören zur Lösung eines Merge-Konflikts? (Mehrfachauswahl)',
        options: [
            'Die Konfliktmarkierungen manuell bearbeiten',
            'Das Repository neu initialisieren',
            'Die Datei mit git add zur Staging Area hinzufügen',
            'Einen Merge-Commit erstellen',
            'Das .git Verzeichnis löschen'
        ],
        correctAnswers: [0, 2, 3]
    },
    
    // 21. Text Input
    {
        type: 'text-input',
        question: 'Git Tags:',
        inputs: [
            { label: 'Befehl zum Erstellen eines annotierten Tags "v1.0" mit Nachricht', placeholder: 'git ...', correctAnswer: 'git tag -a v1.0 -m' }
        ]
    },
    
    // 22. Multiple Choice
    {
        type: 'multiple-choice',
        question: 'Was bewirkt der Befehl git restore README.md?',
        options: [
            'Löscht die Datei',
            'Erstellt ein Backup',
            'Setzt die Datei auf den Stand des letzten Commits zurück',
            'Benennt die Datei um'
        ],
        correctAnswer: 2
    },
    
    // 23. Strikethrough
    {
        type: 'strikethrough',
        question: 'Streiche alle FALSCHEN Aussagen über Git-Objekte durch:',
        items: [
            { text: 'Blobs enthalten den Dateiinhalt ohne Dateinamen', isWrong: false },
            { text: 'Trees repräsentieren Dateien', isWrong: true },
            { text: 'Commits verweisen auf einen Tree', isWrong: false },
            { text: 'Alte Objekte werden nach einem Commit gelöscht', isWrong: true },
            { text: 'Jeder Knoten hat eine eindeutige SHA-1-Hash-ID', isWrong: false }
        ]
    },
    
    // 24. Connection
    {
        type: 'connection',
        question: 'Verbinde die Befehle mit ihrer Beschreibung beim Rückgängigmachen:',
        leftItems: [
            { id: 1, text: 'git restore' },
            { id: 2, text: 'git restore --staged' },
            { id: 3, text: 'git revert' },
            { id: 4, text: 'git reset' }
        ],
        rightItems: [
            { id: 'a', text: 'Entfernt Datei aus Staging Area', matchId: 2 },
            { id: 'b', text: 'Erstellt neuen Commit der Änderungen rückgängig macht', matchId: 3 },
            { id: 'c', text: 'Verwirft Änderungen im Arbeitsverzeichnis', matchId: 1 },
            { id: 'd', text: 'Bewegt HEAD auf einen anderen Commit', matchId: 4 }
        ]
    },
    
    // 25. Multiple Choice
    {
        type: 'multiple-choice',
        question: 'Was ist ein "bare" Repository?',
        options: [
            'Ein leeres Repository ohne Dateien',
            'Ein Repository ohne .git Verzeichnis',
            'Ein Repository ohne Arbeitsverzeichnis, nur Git-Objekte',
            'Ein temporäres Repository'
        ],
        correctAnswer: 2
    }
];

// Quiz State
let currentQuestion = 0;
let userAnswers = [];
let connections = [];
let selectedMatchLeft = null;
let selectedMatchRight = null;
let matches = [];

// Initialize Quiz
document.addEventListener('DOMContentLoaded', () => {
    initializeQuiz();
    setupEventListeners();
});

function initializeQuiz() {
    userAnswers = new Array(quizData.length).fill(null);
    renderQuestion();
    updateProgress();
}

function setupEventListeners() {
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('submitBtn').addEventListener('click', submitQuiz);
}

function renderQuestion() {
    const question = quizData[currentQuestion];
    const container = document.getElementById('quizContent');
    
    let html = `
        <div class="question-card">
            <span class="question-type">${getQuestionTypeLabel(question.type)}</span>
            <h2 class="question-text">${currentQuestion + 1}. ${question.question}</h2>
            <div class="question-content">
                ${renderQuestionContent(question)}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Re-attach event listeners based on question type
    attachQuestionEventListeners(question);
    
    // Restore previous answer if exists
    restoreAnswer(question);
}

function getQuestionTypeLabel(type) {
    const labels = {
        'multiple-choice': 'Multiple Choice',
        'checkbox': 'Mehrfachauswahl',
        'text-input': 'Texteingabe',
        'matching': 'Zuordnung',
        'connection': 'Verbindung',
        'strikethrough': 'Durchstreichen'
    };
    return labels[type] || type;
}

function renderQuestionContent(question) {
    switch(question.type) {
        case 'multiple-choice':
            return renderMultipleChoice(question);
        case 'checkbox':
            return renderCheckbox(question);
        case 'text-input':
            return renderTextInput(question);
        case 'matching':
            return renderMatching(question);
        case 'connection':
            return renderConnection(question);
        case 'strikethrough':
            return renderStrikethrough(question);
        default:
            return '';
    }
}

function renderMultipleChoice(question) {
    return question.options.map((option, index) => `
        <div class="option-item" data-index="${index}">
            <input type="radio" name="q${currentQuestion}" id="opt${index}" value="${index}">
            <label class="option-label" for="opt${index}">${option}</label>
        </div>
    `).join('');
}

function renderCheckbox(question) {
    return question.options.map((option, index) => `
        <div class="option-item" data-index="${index}">
            <input type="checkbox" name="q${currentQuestion}" id="opt${index}" value="${index}">
            <label class="option-label" for="opt${index}">${option}</label>
        </div>
    `).join('');
}

function renderTextInput(question) {
    return question.inputs.map((input, index) => `
        <div class="text-input-group">
            <label class="text-input-label">${input.label}</label>
            <input type="text" class="text-input-field" data-index="${index}" 
                   placeholder="${input.placeholder}">
        </div>
    `).join('');
}

function renderMatching(question) {
    return `
        <div class="matching-container">
            <div class="matching-column">
                <h4>Befehle/Konzepte</h4>
                ${question.leftItems.map(item => `
                    <div class="matching-item" data-id="${item.id}" data-side="left">
                        ${item.text}
                        <span class="match-indicator"></span>
                    </div>
                `).join('')}
            </div>
            <div class="matching-column">
                <h4>Funktionen</h4>
                ${question.rightItems.map(item => `
                    <div class="matching-item" data-id="${item.id}" data-side="right" data-match="${item.matchId}">
                        ${item.text}
                        <span class="match-indicator"></span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderConnection(question) {
    return `
        <div class="connection-container">
            <canvas id="connectionCanvas"></canvas>
            <div class="connection-column">
                ${question.leftItems.map(item => `
                    <div class="connection-item" data-id="${item.id}" data-side="left">
                        ${item.text}
                        <div class="connection-dot"></div>
                    </div>
                `).join('')}
            </div>
            <div class="connection-column">
                ${question.rightItems.map(item => `
                    <div class="connection-item" data-id="${item.id}" data-side="right" data-match="${item.matchId}">
                        ${item.text}
                        <div class="connection-dot"></div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderStrikethrough(question) {
    return `
        <div class="strikethrough-items">
            ${question.items.map((item, index) => `
                <div class="strikethrough-item" data-index="${index}">
                    <input type="checkbox" class="strikethrough-checkbox" id="strike${index}">
                    <label for="strike${index}">${item.text}</label>
                </div>
            `).join('')}
        </div>
    `;
}

function attachQuestionEventListeners(question) {
    switch(question.type) {
        case 'multiple-choice':
            attachMultipleChoiceListeners();
            break;
        case 'checkbox':
            attachCheckboxListeners();
            break;
        case 'text-input':
            attachTextInputListeners();
            break;
        case 'matching':
            attachMatchingListeners();
            break;
        case 'connection':
            attachConnectionListeners();
            break;
        case 'strikethrough':
            attachStrikethroughListeners();
            break;
    }
}

function attachMultipleChoiceListeners() {
    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', function() {
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            
            document.querySelectorAll('.option-item').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            userAnswers[currentQuestion] = parseInt(radio.value);
        });
    });
}

function attachCheckboxListeners() {
    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.tagName !== 'INPUT') {
                const checkbox = this.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
            }
            
            this.classList.toggle('selected', this.querySelector('input[type="checkbox"]').checked);
            
            const selected = Array.from(document.querySelectorAll('.option-item input[type="checkbox"]:checked'))
                .map(cb => parseInt(cb.value));
            userAnswers[currentQuestion] = selected;
        });
    });
}

function attachTextInputListeners() {
    document.querySelectorAll('.text-input-field').forEach(input => {
        input.addEventListener('input', function() {
            const answers = Array.from(document.querySelectorAll('.text-input-field'))
                .map(field => field.value.trim());
            userAnswers[currentQuestion] = answers;
        });
    });
}

function attachMatchingListeners() {
    matches = [];
    selectedMatchLeft = null;
    selectedMatchRight = null;
    
    document.querySelectorAll('.matching-item').forEach(item => {
        item.addEventListener('click', function() {
            const side = this.dataset.side;
            const id = this.dataset.id;
            
            if (side === 'left') {
                // Deselect if already selected
                if (selectedMatchLeft === id) {
                    selectedMatchLeft = null;
                    this.classList.remove('selected');
                } else {
                    document.querySelectorAll('[data-side="left"]').forEach(i => i.classList.remove('selected'));
                    selectedMatchLeft = id;
                    this.classList.add('selected');
                }
            } else {
                // Deselect if already selected
                if (selectedMatchRight === id) {
                    selectedMatchRight = null;
                    this.classList.remove('selected');
                } else {
                    document.querySelectorAll('[data-side="right"]').forEach(i => i.classList.remove('selected'));
                    selectedMatchRight = id;
                    this.classList.add('selected');
                }
            }
            
            // Create match if both selected
            if (selectedMatchLeft && selectedMatchRight) {
                matches.push({ left: selectedMatchLeft, right: selectedMatchRight });
                
                document.querySelector(`[data-side="left"][data-id="${selectedMatchLeft}"]`).classList.add('matched');
                document.querySelector(`[data-side="right"][data-id="${selectedMatchRight}"]`).classList.add('matched');
                
                document.querySelectorAll('.matching-item').forEach(i => i.classList.remove('selected'));
                
                selectedMatchLeft = null;
                selectedMatchRight = null;
                
                userAnswers[currentQuestion] = [...matches];
            }
        });
    });
}

function attachConnectionListeners() {
    const canvas = document.getElementById('connectionCanvas');
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    const ctx = canvas.getContext('2d');
    
    connections = [];
    let selectedConnection = null;
    
    document.querySelectorAll('.connection-item').forEach(item => {
        item.addEventListener('click', function() {
            const side = this.dataset.side;
            const id = this.dataset.id;
            
            if (side === 'left') {
                if (selectedConnection === id) {
                    selectedConnection = null;
                    this.classList.remove('selected');
                } else {
                    document.querySelectorAll('[data-side="left"]').forEach(i => i.classList.remove('selected'));
                    selectedConnection = id;
                    this.classList.add('selected');
                }
            } else {
                if (selectedConnection) {
                    connections.push({ left: selectedConnection, right: id });
                    
                    document.querySelector(`[data-side="left"][data-id="${selectedConnection}"]`).classList.add('connected');
                    this.classList.add('connected');
                    
                    document.querySelectorAll('.connection-item').forEach(i => i.classList.remove('selected'));
                    selectedConnection = null;
                    
                    userAnswers[currentQuestion] = [...connections];
                    drawConnections();
                }
            }
        });
    });
    
    function drawConnections() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        connections.forEach(conn => {
            const leftItem = document.querySelector(`[data-side="left"][data-id="${conn.left}"]`);
            const rightItem = document.querySelector(`[data-side="right"][data-id="${conn.right}"]`);
            
            if (leftItem && rightItem) {
                const leftDot = leftItem.querySelector('.connection-dot');
                const rightDot = rightItem.querySelector('.connection-dot');
                
                const leftRect = leftDot.getBoundingClientRect();
                const rightRect = rightDot.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                
                const startX = leftRect.left - containerRect.left + leftRect.width / 2;
                const startY = leftRect.top - containerRect.top + leftRect.height / 2;
                const endX = rightRect.left - containerRect.left + rightRect.width / 2;
                const endY = rightRect.top - containerRect.top + rightRect.height / 2;
                
                ctx.strokeStyle = '#3fb950';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }
        });
    }
}

function attachStrikethroughListeners() {
    document.querySelectorAll('.strikethrough-item').forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.tagName !== 'INPUT') {
                const checkbox = this.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
            }
            
            this.classList.toggle('struck', this.querySelector('input[type="checkbox"]').checked);
            
            const struck = Array.from(document.querySelectorAll('.strikethrough-item input[type="checkbox"]:checked'))
                .map(cb => parseInt(cb.id.replace('strike', '')));
            userAnswers[currentQuestion] = struck;
        });
    });
}

function restoreAnswer(question) {
    const answer = userAnswers[currentQuestion];
    if (!answer) return;
    
    switch(question.type) {
        case 'multiple-choice':
            const radio = document.querySelector(`input[type="radio"][value="${answer}"]`);
            if (radio) {
                radio.checked = true;
                radio.closest('.option-item').classList.add('selected');
            }
            break;
            
        case 'checkbox':
            answer.forEach(index => {
                const checkbox = document.querySelector(`input[type="checkbox"][value="${index}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                    checkbox.closest('.option-item').classList.add('selected');
                }
            });
            break;
            
        case 'text-input':
            document.querySelectorAll('.text-input-field').forEach((input, index) => {
                if (answer[index]) {
                    input.value = answer[index];
                }
            });
            break;
            
        case 'matching':
            matches = [...answer];
            answer.forEach(match => {
                const leftItem = document.querySelector(`[data-side="left"][data-id="${match.left}"]`);
                const rightItem = document.querySelector(`[data-side="right"][data-id="${match.right}"]`);
                if (leftItem) leftItem.classList.add('matched');
                if (rightItem) rightItem.classList.add('matched');
            });
            break;
            
        case 'connection':
            connections = [...answer];
            answer.forEach(conn => {
                const leftItem = document.querySelector(`[data-side="left"][data-id="${conn.left}"]`);
                const rightItem = document.querySelector(`[data-side="right"][data-id="${conn.right}"]`);
                if (leftItem) leftItem.classList.add('connected');
                if (rightItem) rightItem.classList.add('connected');
            });
            setTimeout(() => {
                const canvas = document.getElementById('connectionCanvas');
                if (canvas) {
                    const ctx = canvas.getContext('2d');
                    const container = canvas.parentElement;
                    connections.forEach(conn => {
                        const leftItem = document.querySelector(`[data-side="left"][data-id="${conn.left}"]`);
                        const rightItem = document.querySelector(`[data-side="right"][data-id="${conn.right}"]`);
                        
                        if (leftItem && rightItem) {
                            const leftDot = leftItem.querySelector('.connection-dot');
                            const rightDot = rightItem.querySelector('.connection-dot');
                            
                            const leftRect = leftDot.getBoundingClientRect();
                            const rightRect = rightDot.getBoundingClientRect();
                            const containerRect = container.getBoundingClientRect();
                            
                            const startX = leftRect.left - containerRect.left + leftRect.width / 2;
                            const startY = leftRect.top - containerRect.top + leftRect.height / 2;
                            const endX = rightRect.left - containerRect.left + rightRect.width / 2;
                            const endY = rightRect.top - containerRect.top + rightRect.height / 2;
                            
                            ctx.strokeStyle = '#3fb950';
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(startX, startY);
                            ctx.lineTo(endX, endY);
                            ctx.stroke();
                        }
                    });
                }
            }, 100);
            break;
            
        case 'strikethrough':
            answer.forEach(index => {
                const checkbox = document.getElementById(`strike${index}`);
                if (checkbox) {
                    checkbox.checked = true;
                    checkbox.closest('.strikethrough-item').classList.add('struck');
                }
            });
            break;
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `Frage ${currentQuestion + 1} von ${quizData.length}`;
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        renderQuestion();
        updateProgress();
        updateNavigationButtons();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        updateProgress();
        updateNavigationButtons();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    
    if (currentQuestion === quizData.length - 1) {
        document.getElementById('nextBtn').classList.add('d-none');
        document.getElementById('submitBtn').classList.remove('d-none');
    } else {
        document.getElementById('nextBtn').classList.remove('d-none');
        document.getElementById('submitBtn').classList.add('d-none');
    }
}

function submitQuiz() {
    const results = calculateResults();
    showResults(results);
}

function calculateResults() {
    let correct = 0;
    const details = [];
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;
        
        switch(question.type) {
            case 'multiple-choice':
                isCorrect = userAnswer === question.correctAnswer;
                break;
                
            case 'checkbox':
                isCorrect = arraysEqual(userAnswer?.sort(), question.correctAnswers.sort());
                break;
                
            case 'text-input':
                isCorrect = question.inputs.every((input, i) => {
                    const answer = userAnswer?.[i]?.toLowerCase().trim() || '';
                    const correct = input.correctAnswer.toLowerCase().trim();
                    return answer === correct;
                });
                break;
                
            case 'matching':
            case 'connection':
                isCorrect = userAnswer?.length === question.rightItems.length &&
                    userAnswer.every(match => {
                        const rightItem = question.rightItems.find(r => r.id === match.right);
                        return rightItem && rightItem.matchId == match.left;
                    });
                break;
                
            case 'strikethrough':
                const wrongIndices = question.items
                    .map((item, i) => item.isWrong ? i : -1)
                    .filter(i => i !== -1);
                isCorrect = arraysEqual(userAnswer?.sort(), wrongIndices.sort());
                break;
        }
        
        if (isCorrect) correct++;
        
        details.push({
            question: question.question,
            isCorrect: isCorrect,
            type: question.type
        });
    });
    
    return {
        correct: correct,
        total: quizData.length,
        percentage: Math.round((correct / quizData.length) * 100),
        details: details
    };
}

function arraysEqual(a, b) {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    return a.every((val, index) => val === b[index]);
}

function showResults(results) {
    const modal = new bootstrap.Modal(document.getElementById('resultsModal'));
    
    // Update score circle
    const percentage = results.percentage;
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (percentage / 100) * circumference;
    
    document.getElementById('scoreCircle').style.strokeDashoffset = offset;
    document.getElementById('scorePercentage').textContent = `${percentage}%`;
    document.getElementById('correctAnswers').textContent = results.correct;
    document.getElementById('totalQuestions').textContent = results.total;
    
    // Score message and rating
    let message, rating;
    if (percentage >= 90) {
        message = '🎉 Ausgezeichnet!';
        rating = '⭐⭐⭐⭐⭐ Git-Meister';
    } else if (percentage >= 75) {
        message = '👏 Sehr gut!';
        rating = '⭐⭐⭐⭐ Git-Profi';
    } else if (percentage >= 60) {
        message = '👍 Gut gemacht!';
        rating = '⭐⭐⭐ Fortgeschrittener';
    } else if (percentage >= 40) {
        message = '💪 Weiter üben!';
        rating = '⭐⭐ Anfänger';
    } else {
        message = '📚 Nochmal lernen!';
        rating = '⭐ Neuling';
    }
    
    document.getElementById('scoreMessage').textContent = message;
    document.getElementById('scoreRating').textContent = rating;
    
    // Detailed results
    const detailsHTML = results.details.map((detail, index) => `
        <div class="result-item ${detail.isCorrect ? 'correct' : 'incorrect'}">
            <div class="result-question">
                ${index + 1}. ${detail.question}
                ${detail.isCorrect ? 
                    '<i class="bi bi-check-circle-fill text-success float-end"></i>' : 
                    '<i class="bi bi-x-circle-fill text-danger float-end"></i>'}
            </div>
            <div class="result-answer">
                ${detail.isCorrect ? 'Richtig beantwortet' : 'Falsch beantwortet'}
            </div>
        </div>
    `).join('');
    
    document.getElementById('detailedResults').innerHTML = detailsHTML;
    
    modal.show();
}

// Initialize
updateNavigationButtons();