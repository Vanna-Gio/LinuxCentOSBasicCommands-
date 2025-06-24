
        // Game Data - Merged and expanded for new modes
        const gameData = {
            admin: {
                "qna-centos-shutdown": { // Changed key to match data-mode for consistency
                    title: "CentOS: Shutdown/Restart",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Understanding CentOS Shutdown and Restart Commands</h3>
                        <p class="text-gray-700 mb-4">In Linux, managing system power is done using various commands. Understanding these commands is crucial for proper system administration.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>reboot</code></strong>: This command is used to restart the system. It's a quick way to restart after updates or configuration changes.</li>
                            <li><strong><code>init 6</code></strong>: This command also initiates a system reboot. In System V init systems, runlevels are used to define the state of the system, and runlevel 6 is traditionally for rebooting.</li>
                            <li><strong><code>poweroff</code></strong>: This command shuts down the system and turns off the power. It's used for a complete shutdown.</li>
                            <li><strong><code>shutdown -h now</code></strong>: This command immediately shuts down the system. The <code>-h</code> option means "halt" (power off), and <code>now</code> specifies immediate execution.</li>
                            <li><strong><code>init 0</code></strong>: Similar to <code>poweroff</code>, this command initiates a system shutdown. In System V init systems, runlevel 0 is traditionally for halting the system.</li>
                            <li><strong><strong><code>shutdown -h +60</code></strong>: This command schedules a system shutdown in 60 minutes. The <code>+60</code> specifies the delay in minutes. This is useful for giving users a warning.</li>
                            <li><strong><code>shutdown -h 22:54</code></strong>: This command schedules a system shutdown at a specific time, in this case, 22:54 (10:54 PM).</li>
                            <li><strong><code>shutdown -c</code></strong>: This command is used to cancel a scheduled shutdown. If you've set a shutdown with <code>shutdown -h +minutes</code> or <code>shutdown -h HH:MM</code>, this command will stop it.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command is used to restart the system immediately?",
                            options: [
                                { text: "poweroff", correct: false },
                                { text: "reboot", correct: true },
                                { text: "shutdown -h 0", correct: false }
                            ]
                        },
                        {
                            type: "multiple-choice",
                            question: "If you want to shut down your system at a specific time (e.g., 8:30 PM), which command syntax would you use?",
                            options: [
                                { text: "shutdown -c", correct: false },
                                { text: "shutdown -h 20:30", correct: true },
                                { text: "shutdown -h +20", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "The command to cancel a scheduled shutdown is 'shutdown ____'.",
                            correctAnswer: "-c",
                            explanation: "The '-c' option is specifically used to cancel any pending shutdown commands."
                        },
                        {
                            type: "fill-in-blank",
                            question: "The 'init 0' command is typically used to perform a system ____.",
                            correctAnswer: "halt/shutdown",
                            explanation: "In System V init, runlevel 0 is designated for halting the system, which is equivalent to a shutdown."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the Linux command with its correct action or purpose.",
                            pairs: [
                                { stem: "reboot", correctOption: "Restarts the system immediately" },
                                { stem: "init 6", correctOption: "Initiates a system reboot (System V init)" },
                                { stem: "poweroff", correctOption: "Shuts down the system and turns off power" },
                                { stem: "shutdown -h now", correctOption: "Immediately shuts down the system" },
                                { stem: "init 0", correctOption: "Initiates a system shutdown (System V init)" },
                                { stem: "shutdown -h +60", correctOption: "Schedules a system shutdown in 60 minutes" },
                                { stem: "shutdown -h 22:54", correctOption: "Schedules a system shutdown at 10:54 PM" },
                                { stem: "shutdown -c", correctOption: "Cancels a scheduled shutdown" }
                            ]
                        }
                    ]
                },
                "qna-centos-sleep": {
                    title: "CentOS: Sleep & Hibernate",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Managing Sleep and Hibernate States in CentOS</h3>
                        <p class="text-gray-700 mb-4">Linux provides commands for managing power states beyond just shutting down or rebooting.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>pm-suspend-hybrid</code></strong>: This command puts the system into a hybrid sleep state, also known as suspend-to-both. It saves the system state to both RAM and disk. If power is lost, the system can still resume from disk (like hibernation). If power is maintained, it can resume quickly from RAM (like suspend/sleep).</li>
                            <li><strong><code>pm-hibernate</code></strong>: This command puts the system into hibernation (suspend-to-disk). It saves the entire system state to the hard disk and then powers down the system. When the system is powered back on, it restores the state from the disk, allowing you to pick up exactly where you left off.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command saves the system state to both RAM and disk, allowing for quick resume or recovery in case of power loss?",
                            options: [
                                { text: "pm-hibernate", correct: false },
                                { text: "pm-suspend-hybrid", correct: true },
                                { text: "reboot", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To save the system state to disk and completely power down the system, you would use the command '____'.",
                            correctAnswer: "pm-hibernate",
                            explanation: "The `pm-hibernate` command is used for full system hibernation, saving state to disk."
                        }
                    ]
                },
                "qna-centos-guimode": {
                    title: "CentOS: Switch GUI/Text Mode",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Switching Between Graphical and Text Modes in CentOS</h3>
                        <p class="text-gray-700 mb-4">Linux systems can operate in different modes: a graphical user interface (GUI) or a command-line interface (text mode). You can switch between these modes using keyboard shortcuts or commands.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>Ctrl + Alt + F1</code> or <code>Ctrl + Alt + F7</code></strong>: These key combinations are typically used to switch to the GUI (Graphical User Interface) mode. The exact F-key might vary depending on your Linux distribution and configuration (F1 or F7 are common for GUI).</li>
                            <li><strong><code>Ctrl + Alt + F2–F6</code></strong>: These key combinations are used to switch to a text-based console (TTY). Each F-key from F2 to F6 usually corresponds to a different virtual terminal, allowing you to have multiple command-line sessions open simultaneously.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which keyboard shortcut is commonly used to switch to a text-based console (TTY)?",
                            options: [
                                { text: "Ctrl + Alt + F1", correct: false },
                                { text: "Ctrl + Alt + F7", correct: false },
                                { text: "Ctrl + Alt + F3", correct: true }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To switch to the Graphical User Interface (GUI), you would typically use the keyboard shortcut 'Ctrl + Alt + ____' (select one common F-key).",
                            correctAnswer: "F7",
                            explanation: "Ctrl + Alt + F7 is a common shortcut to return to the GUI, though F1 can also be used depending on the setup."
                        }
                    ]
                },
                "qna-centos-users": {
                    title: "CentOS: User Switching",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">User Switching and Privilege Escalation in CentOS</h3>
                        <p class="text-gray-700 mb-4">Managing users is fundamental in Linux. These commands allow you to switch between user accounts and execute commands with different privileges.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>su username</code></strong>: This command is used to switch to another user account. If you don't specify a <code>username</code>, it defaults to the superuser (root). You will be prompted for the password of the target user.</li>
                            <li><strong><code>exit</code></strong>: This command is used to log out from the current shell or to return to the previous user's shell after using <code>su</code>.</li>
                            <li><strong><code>sudo</code></strong>: This command stands for "superuser do" and allows a permitted user to execute a command as the superuser or another user, as specified by the security policy (typically the <code>/etc/sudoers</code> file). It's the preferred method for running commands with root privileges as it requires the user's own password and logs the action.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command is the preferred method for running commands with root privileges and logs the action?",
                            options: [
                                { text: "su root", correct: false },
                                { text: "sudo", correct: true },
                                { text: "exit", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To switch to another user named 'john' from your current session, you would use the command '____ john'.",
                            correctAnswer: "su",
                            explanation: "The `su` command followed by a username allows you to switch user accounts."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the user switching command with its function.",
                            pairs: [
                                { stem: "su username", correctOption: "Switch to another user account" },
                                { stem: "exit", correctOption: "Log out or return to previous user" },
                                { stem: "sudo", correctOption: "Execute command with root privileges" }
                            ]
                        }
                    ]
                },
                "qna-centos-help": {
                    title: "CentOS: Help Commands",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Getting Help with Commands in CentOS</h3>
                        <p class="text-gray-700 mb-4">Linux provides several ways to get help and information about commands.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>command --help</code></strong>: This displays a brief summary of the command's usage and its common options. It's usually a quick way to get an overview without opening a full manual page.</li>
                            <li><strong><code>man command</code></strong>: This opens the manual page (man page) for the specified command. Man pages are comprehensive documents providing detailed information about a command, including its purpose, syntax, options, and examples.</li>
                            <li><strong><code>info command</code></strong>: This opens the info documentation for the command, which is often more structured and hypertext-linked compared to man pages, especially for GNU utilities.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command provides a comprehensive and detailed manual page for a Linux command?",
                            options: [
                                { text: "command --help", correct: false },
                                { text: "man command", correct: true },
                                { text: "info command", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To get a brief summary of a command's usage, you can use 'command ____'.",
                            correctAnswer: "--help",
                            explanation: "The `--help` option provides a concise summary of a command's usage."
                        }
                    ]
                },
                "qna-centos-filesystem": {
                    title: "CentOS: File System Navigation",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Navigating the Linux File System in CentOS</h3>
                        <p class="text-gray-700 mb-4">Navigating the Linux file system is a core skill.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>pwd</code></strong>: (Print Working Directory) This command displays the full path of the current directory you are in.</li>
                            <li><strong><code>ls</code></strong>: (List) This command lists the files and directories in the current directory.
                                <ul class="list-circle list-inside ml-5">
                                    <li><strong><code>ls -a</code></strong>: Lists all files, including hidden ones (those starting with a dot).</li>
                                    <li><strong><code>ls -l</code></strong>: Lists files in a "long" format, showing detailed information like permissions, owner, group, size, and modification date.</li>
                                    <li><strong><code>ls -lh</code></strong>: Lists files in long format with human-readable file sizes (e.g., '1K', '234M', '2G').</li>
                                </ul>
                            </li>
                            <li><strong><code>cd</code></strong>: (Change Directory) This command is used to change the current directory.
                                <ul class="list-circle list-inside ml-5">
                                    <li><strong><code>cd ..</code></strong>: Moves up one directory level.</li>
                                    <li><strong><code>cd ~</code></strong>: Moves to your home directory.</li>
                                    <li><strong><code>cd /</code></strong>: Moves to the root directory.</li>
                                    <li><strong><code>cd -</code></strong>: Moves to the previous working directory.</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which `ls` option is used to list all files, including hidden ones?",
                            options: [
                                { text: "ls -l", correct: false },
                                { text: "ls -a", correct: true },
                                { text: "ls -h", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To move to your home directory, you can use the command 'cd ____'.",
                            correctAnswer: "~",
                            explanation: "The tilde `~` symbol is a shortcut for the user's home directory."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the file system navigation command to its action.",
                            pairs: [
                                { stem: "pwd", correctOption: "Show current directory" },
                                { stem: "cd ..", correctOption: "Move up one directory" },
                                { stem: "ls -lh", correctOption: "List files with human-readable sizes" },
                                { stem: "cd /", correctOption: "Move to the root directory" }
                            ]
                        }
                    ]
                },
                "qna-centos-editors": {
                    title: "CentOS: File Editors (Vi/Vim)",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Using Text Editors (Vi/Vim) in CentOS</h3>
                        <p class="text-gray-700 mb-4">Text editors are essential for working with configuration files and scripts in Linux. Vi (or Vim) is a classic and powerful command-line editor.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>vi filename</code></strong>: Opens the specified <code>filename</code> in the VI editor. If the file doesn't exist, it will be created.</li>
                            <li><strong><code>i</code> or <code>Insert</code></strong>: Pressing 'i' (insert) or the 'Insert' key switches from command mode to insert mode, allowing you to type and edit text.</li>
                            <li><strong><code>Esc</code></strong>: Pressing 'Esc' exits insert mode and returns to command mode.</li>
                            <li><strong><code>:</code> followed by <code>wq</code></strong>: (Write and Quit) In command mode, type <code>:wq</code> and press Enter to save the changes and exit the editor.</li>
                            <li><strong><code>:</code> followed by <code>q!</code></strong>: (Quit without saving) In command mode, type <code>:q!</code> and press Enter to exit the editor without saving any changes.</li>
                            <li><strong><code>:</code> followed by <code>set number</code></strong>: In command mode, type <code>:set number</code> and press Enter to display line numbers in the editor.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "What command do you use in VI editor to save changes and quit?",
                            options: [
                                { text: ":q!", correct: false },
                                { text: ":wq", correct: true },
                                { text: "i", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To enter edit mode in VI after opening a file, you press the '____' key.",
                            correctAnswer: "i (or Insert)",
                            explanation: "Pressing 'i' (insert) or the 'Insert' key allows you to start typing in VI."
                        }
                    ]
                },
                "qna-centos-touch": {
                    title: "CentOS: Touch Command",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Using the 'touch' Command in CentOS</h3>
                        <p class="text-gray-700 mb-4">The <code>touch</code> command is primarily used to change file timestamps, but it's also commonly used to create new, empty files.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>touch filename</code></strong>: Creates a new, empty file with the specified <code>filename</code>. If the file already exists, its access and modification times are updated.</li>
                            <li><strong><code>touch file1 file2</code></strong>: Creates multiple new, empty files named <code>file1</code> and <code>file2</code> simultaneously.</li>
                            <li><strong><code>touch .filename</code></strong>: Creates a new hidden file. In Linux, files starting with a dot (<code>.</code>) are considered hidden.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command creates a new, empty file named 'my_document.txt'?",
                            options: [
                                { text: "mkdir my_document.txt", correct: false },
                                { text: "touch my_document.txt", correct: true },
                                { text: "create my_document.txt", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To create a hidden file named '.secret_data', you would use the command 'touch ____'.",
                            correctAnswer: ".secret_data",
                            explanation: "Files starting with a dot are hidden in Linux, and `touch` can create them."
                        }
                    ]
                },
                "qna-centos-textutil": {
                    title: "CentOS: Text Utilities",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Essential Text Utilities in CentOS</h3>
                        <p class="text-gray-700 mb-4">Linux provides powerful command-line utilities for working with text files.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>head -n file</code></strong>: Displays the first 'n' lines of a specified file. If 'n' is omitted, it defaults to the first 10 lines.</li>
                            <li><strong><code>tail -n file</code></strong>: Displays the last 'n' lines of a specified file. If 'n' is omitted, it defaults to the last 10 lines. This is useful for monitoring logs.</li>
                            <li><strong><code>grep word filename</code></strong>: Searches for lines containing a specific 'word' (or pattern) within a <code>filename</code>. It prints all matching lines to the standard output.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command would you use to display the last 5 lines of a log file?",
                            options: [
                                { text: "head -n 5 logfile.txt", correct: false },
                                { text: "grep -n 5 logfile.txt", correct: false },
                                { text: "tail -n 5 logfile.txt", correct: true }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To search for the word 'error' in 'app.log', you would use the command '____ error app.log'.",
                            correctAnswer: "grep",
                            explanation: "The `grep` command is used for pattern searching within files."
                        }
                    ]
                },
                "qna-centos-echo": {
                    title: "CentOS: Echo Command",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Using the 'echo' Command in CentOS</h3>
                        <p class="text-gray-700 mb-4">The <code>echo</code> command is used to display lines of text or string values. It's often used in shell scripts to output information or to write text to files.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>echo Hello</code></strong>: Prints the text "Hello" to the standard output (your terminal).</li>
                            <li><strong><code>echo $USER</code></strong>: Prints the value of the environment variable <code>USER</code>, which typically holds the current user's username. This demonstrates how to access shell variables with <code>echo</code>.</li>
                            <li><strong><code>echo 'text' > file</code></strong>: Writes (overwrites) the specified 'text' into the <code>file</code>. If the file already exists, its contents will be replaced. If it doesn't exist, a new file will be created.</li>
                            <li><strong><code>echo 'text' >> file</code></strong>: Appends the specified 'text' to the end of the <code>file</code>. If the file doesn't exist, a new one will be created. This is useful for adding data without erasing existing content.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which `echo` command would you use to append 'New line' to an existing file named 'notes.txt'?",
                            options: [
                                { text: "echo 'New line' > notes.txt", correct: false },
                                { text: "echo 'New line' >> notes.txt", correct: true },
                                { text: "echo 'New line' notes.txt", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To print the current user's username using an environment variable, you would use 'echo $____'.",
                            correctAnswer: "USER",
                            explanation: "The `$USER` variable holds the current user's name."
                        }
                    ]
                },
                "qna-centos-shell": {
                    title: "CentOS: Shell & Prompt Info",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Understanding Shell and Prompt Information in CentOS</h3>
                        <p class="text-gray-700 mb-4">Understanding your shell environment and prompt helps in navigating and working efficiently in Linux.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong>Shell types</strong>:
                                <ul class="list-circle list-inside ml-5">
                                    <li><strong>Bash ($/#)</strong>: Bash (Bourne Again SHell) is the most common default shell in Linux distributions. Its default prompt usually ends with <code>$</code> for a regular user and <code>#</code> for the root user.</li>
                                    <li><strong>C shell (%)</strong>: The C shell (csh or tcsh) is another type of shell, often recognized by its default prompt ending with <code>%</code>.</li>
                                </ul>
                            </li>
                            <li><strong>Prompt</strong>: The command prompt provides useful information about your current session.
                                <ul class="list-circle list-inside ml-5">
                                    <li><strong><code>[user@hostname ~]$</code></strong>: A common prompt format for a regular user, showing the current username (<code>user</code>), the hostname (<code>hostname</code>), and the current directory (<code>~</code> for home directory). The <code>$</code> indicates a regular user.</li>
                                    <li><strong><code>#</code></strong>: The <code>#</code> symbol at the end of the prompt typically indicates that you are logged in as the root user (superuser), signifying elevated privileges.</li>
                                </ul>
                            </li>
                            <li><strong>Environment Variables</strong>: These are dynamic-named values that affect the way running processes will behave.
                                <ul class="list-circle list-inside ml-5">
                                    <li><strong><code>$HOME</code></strong>: This variable stores the path to the current user's home directory.</li>
                                    <li><strong><code>$USER</code></strong>: This variable stores the username of the current logged-in user.</li>
                                    <li><strong><code>$HOSTNAME</code></strong>: This variable stores the name of the system (computer) you are currently using.</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which symbol typically indicates that you are logged in as the root user in the Bash shell?",
                            options: [
                                { text: "$", correct: false },
                                { text: "#", correct: true },
                                { text: "%", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "The environment variable '____' stores the path to the current user's home directory.",
                            correctAnswer: "HOME",
                            explanation: "$HOME is a universally recognized environment variable for the home directory."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the shell element with its meaning.",
                            pairs: [
                                { stem: "$", correctOption: "Bash prompt for a regular user" },
                                { stem: "%", correctOption: "C shell prompt" },
                                { stem: "$HOSTNAME", correctOption: "Environment variable for system name" },
                                { stem: "~", correctOption: "Symbol for home directory in prompt" }
                            ]
                        }
                    ]
                },
                "qna-centos-runlevels": {
                    title: "CentOS: Runlevels",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Understanding Runlevels and Targets in CentOS</h3>
                        <p class="text-gray-700 mb-4">Runlevels define the state of a Linux operating system (primarily in System V init systems, though Systemd uses targets that map conceptually).</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>init 0</code></strong>: Halts the system (powers off).</li>
                            <li><strong><code>init 3</code></strong>: Multi-user text mode (command-line only, no GUI). This is common for servers.</li>
                            <li><strong><code>init 5</code></strong>: Multi-user graphical mode (GUI available). This is the typical desktop mode.</li>
                            <li><strong><code>init 6</code></strong>: Reboots the system.</li>
                        </ul>
                        <p class="text-gray-700 mt-4 mb-2"><strong>For Systemd (modern Linux init system):</strong></p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>systemctl get-default</code></strong>: Checks the current default target (which is analogous to a runlevel) the system boots into. It will typically show <code>graphical.target</code> for GUI or <code>multi-user.target</code> for text mode.</li>
                            <li><strong>Change mode permanently</strong>: These commands create a symbolic link to set the default boot target.
                                <ul class="list-circle list-inside ml-5">
                                    <li><strong><code>ln -sf /lib/systemd/system/graphical.target /etc/systemd/system/default.target</code></strong>: Sets the default boot mode to graphical (GUI).</li>
                                    <li><strong><code>ln -sf /lib/systemd/system/multi-user.target /etc/systemd/system/default.target</code></strong>: Sets the default boot mode to multi-user (text mode).</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which runlevel corresponds to the multi-user graphical mode (GUI)?",
                            options: [
                                { text: "init 0", correct: false },
                                { text: "init 3", correct: false },
                                { text: "init 5", correct: true }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To change the default boot mode to text mode permanently in Systemd, you would link to the '____.target'.",
                            correctAnswer: "multi-user",
                            explanation: "`multi-user.target` is the Systemd equivalent for text mode."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the runlevel/target with its corresponding system state.",
                            pairs: [
                                { stem: "init 0", correctOption: "Halt" },
                                { stem: "init 3", correctOption: "Text mode" },
                                { stem: "init 6", correctOption: "Reboot" },
                                { stem: "graphical.target", correctOption: "GUI mode (Systemd)" }
                            ]
                        }
                    ]
                },
                "qna-centos-packagemanagement": {
                    title: "CentOS: Package Management",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">CentOS Package Management with Yum and RPM</h3>
                        <p class="text-gray-700 mb-4">Package management is essential for installing, updating, and removing software in CentOS. CentOS primarily uses <strong>Yum</strong> for repository-based management and <strong>RPM</strong> for individual package files.</p>
                        <h4 class="text-xl font-semibold mt-6 mb-3">📦 YUM Package Manager</h4>
                        <p class="text-gray-700 mb-4">Yum (Yellowdog Updater Modified) is the default package manager used in CentOS for installing and updating packages from CentOS and 3rd party repositories.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>yum install package</code></strong>: Installs a specified package.</li>
                            <li><strong><code>yum install package -y</code></strong>: Installs a package with automatic confirmation (answers 'yes' to prompts).</li>
                            <li><strong><code>yum remove package</code></strong>: Removes (uninstalls) a specified package.</li>
                            <li><strong><code>yum list all</code></strong>: Lists all packages available in CentOS repositories (both installed and available).</li>
                            <li><strong><code>yum list installed</code></strong>: Lists only the packages currently installed on the local system.</li>
                            <li><strong><code>yum search package</code></strong>: Searches for a specific package in CentOS repositories.</li>
                            <li><strong><code>yum update package</code></strong>: Updates a specified package to its latest version (requires an internet connection).</li>
                            <li><strong><code>yum clean all</code></strong>: Clears all cached Yum data, including package headers and metadata.</li>
                            <li><strong><strong><code>rm -rf /var/run/yum.pid</code></strong>: Removes the Yum lock file, often used to resolve errors where another Yum process appears to be running.</li>
                        </ul>
                        <h4 class="text-xl font-semibold mt-6 mb-3">🛠️ YUM Advanced</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>yum groupinstall "Group Name"</code></strong>: Installs a predefined group of packages (e.g., "X Window System").</li>
                            <li><strong><code>yum install pkg1 pkg2</code></strong>: Installs multiple packages in a single command.</li>
                            <li><strong><code>yum localinstall file.rpm</code></strong>: Installs a local <code>.rpm</code> file, but uses Yum to resolve and install any necessary dependencies from repositories. This is the recommended way to install local RPMs with dependency handling.</li>
                        </ul>
                        <h4 class="text-xl font-semibold mt-6 mb-3">📀 RPM Package Manager</h4>
                        <p class="text-gray-700 mb-4">RPM (Red Hat Package Manager) is a lower-level tool used for managing individual <code>.rpm</code> package files.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>rpm -qa</code></strong>: Lists all RPM packages installed on the system.</li>
                            <li><strong><code>rpm -qa | grep keyword</code></strong>: Searches for specific RPM packages among those installed.</li>
                            <li><strong><code>rpm -ivh file.rpm</code></strong>: Installs an RPM package file.
                                <ul class="list-circle list-inside ml-5">
                                    <li><code>-i</code>: Install</li>
                                    <li><code>-v</code>: Verbose (displays detailed information during installation)</li>
                                    <li><code>-h</code>: Hash marks (shows progress with hash marks)</li>
                                </ul>
                            </li>
                            <li><strong><code>rpm -Uvh file.rpm</code></strong>: Updates an existing RPM package or installs it if not present.</li>
                            <li><strong><code>rpm -e package</code></strong>: Removes (erases) a specified RPM package.</li>
                        </ul>
                        <h4 class="text-xl font-semibold mt-6 mb-3">🔑 RPM Flags:</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>i</code></strong>: Install</li>
                            <li><strong><code>U</code></strong>: Update</li>
                            <li><strong><code>e</code></strong>: Erase/Remove</li>
                            <li><strong><code>v</code></strong>: Verbose</li>
                            <li><strong><code>h</code></strong>: Hash progress</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command installs the zip and unzip utilities?",
                            options: [
                                { text: "yum install zip unzip", correct: false }, // dnf is more modern for RHEL/CentOS 8+, but yum still works on older versions and is more commonly known. Keeping dnf for accuracy but noting for user.
                                { text: "dnf install zip unzip", correct: true },
                                { text: "apt-get install zip unzip", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To create a gzipped tar archive of a directory named 'my_files', you would use 'tar -zcvf archive.tar ____'.",
                            correctAnswer: "my_files",
                            explanation: "The `tar` command with the `-zcvf` flags creates a gzipped tar archive of the specified files/directories."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the compression command with its function.",
                            pairs: [
                                { stem: "zip -r archive.zip folder/", correctOption: "Creates a recursive zip archive" },
                                { stem: "unzip archive.zip", correctOption: "Extracts a zip archive" },
                                { stem: "tar -zxvf archive.tar", correctOption: "Extracts a gzipped tar archive" }
                            ]
                        }
                    ]
                },
                "qna-centos-filedirectory": {
                    title: "CentOS: File & Directory Management",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Managing Files and Directories in CentOS</h3>
                        <p class="text-gray-700 mb-4">Managing files and directories is a fundamental aspect of working with Linux. These commands allow you to create, view, move, copy, and delete files and directories.</p>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">1. File Creation</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>cat > filename</code></strong>: Creates a new file. If the file exists, it overwrites its content. Input is taken from the terminal until Ctrl+D is pressed.</li>
                            <li><strong><code>cat >> filename</code></strong>: Appends text to an existing file. If the file doesn't exist, it creates it. Input is taken from the terminal until Ctrl+D is pressed.</li>
                            <li><strong><code>touch filename</code></strong>: Creates a new, empty file. If the file already exists, its access and modification times are updated.</li>
                            <li><strong><code>vi filename</code></strong>: Opens the file in the <code>vi</code> editor. If the file doesn't exist, it creates a new one for editing.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">2. View File Contents</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>cat filename</code></strong>: Displays the entire contents of a file to the standard output (terminal).</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">3. Rename or Move Files</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>mv oldname newname</code></strong>: Renames <code>oldname</code> to <code>newname</code>.</li>
                            <li><strong><code>mv filename directory/</code></strong>: Moves <code>filename</code> into the specified <code>directory/</code>.</li>
                            <li><strong><code>mv filename directory/newname</code></strong>: Moves <code>filename</code> to <code>directory/</code> and renames it to <code>newname</code> simultaneously.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">4. Delete Files</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>rm filename</code></strong>: Deletes a file. It usually prompts for confirmation before deletion.</li>
                            <li><strong><code>rm -f filename</code></strong>: Force deletes a file without prompting for confirmation.</li>
                            <li><strong><code>rm -r filename</code></strong>: Recursively deletes a directory and its contents. While <code>rm -r</code> can delete directories, it's typically combined with <code>-f</code> for force deletion (<code>rm -rf</code>) to avoid prompts and remove non-empty directories.</li>
                            <li><strong><code>rm -rf file1 file2 file3</code></strong>: Force deletes multiple files without prompts.</li>
                            <li><strong><code>rm -rf *</code></strong>: Force deletes all files and directories within the current directory. (Use with extreme caution!)</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">5. Copy Files</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>cp file1.txt file2.txt</code></strong>: Copies the content of <code>file1.txt</code> to <code>file2.txt</code>. If <code>file2.txt</code> doesn't exist, it's created. If it exists, its content is overwritten.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">6. Create Directory</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>mkdir dirname</code></strong>: Creates a new, empty directory with the specified <code>dirname</code>.</li>
                            <li><strong><code>mkdir dir1 dir2 dir3</code></strong>: Creates multiple new directories simultaneously.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">7. Delete Empty Directory</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>rmdir dirname</code></strong>: Deletes an empty directory. It will fail if the directory contains any files or subdirectories.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">8. Delete Non-Empty Directory</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>rm -rf dirname</code></strong>: Force deletes a non-empty directory and all its contents recursively without prompting. (Use with extreme caution!)</li>
                            <li><strong><code>rm -rf dir1 dir2</code></strong>: Force deletes multiple non-empty directories and their contents.</li>
                            <li><strong><strong><code>rm -rf test*</code></strong>: Force deletes all files and directories whose names start with "test" in the current directory. (Use with extreme caution!)</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">9. Rename or Move Directory</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>mv olddirname newdirname</code></strong>: Renames <code>olddirname</code> to <code>newdirname</code>. If <code>newdirname</code> is an existing directory, <code>olddirname</code> is moved inside it.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">10. Copy Directory</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>cp -r dir1/ dir2/</code></strong>: Recursively copies <code>dir1</code> and all its contents (files and subdirectories) into <code>dir2</code>. If <code>dir2</code> doesn't exist, it's created.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">11. Find File/Directory</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>find test</code></strong>: Finds files or directories with the exact name "test" in the current directory and its subdirectories.</li>
                            <li><strong><code>find test*</code></strong>: Finds files or directories whose names start with "test".</li>
                            <li><strong><code>find *test*</code></strong>: Finds files or directories whose names contain "test".</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command is used to create a new, empty file without opening an editor?",
                            options: [
                                { text: "cat > newfile.txt", correct: false },
                                { text: "touch newfile.txt", correct: true },
                                { text: "vi newfile.txt", correct: false }
                            ]
                        },
                        {
                            type: "multiple-choice",
                            question: "You want to move a file named `report.txt` from your current directory to a subdirectory named `documents`, and also rename it to `final_report.txt` in one command. Which command would you use?",
                            options: [
                                { text: "mv report.txt documents/final_report.txt", correct: true },
                                { text: "cp report.txt documents/final_report.txt", correct: false },
                                { text: "rename report.txt final_report.txt documents/", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To display the contents of a file named `log.txt`, you would use the command '____ log.txt'.",
                            correctAnswer: "cat",
                            explanation: "The `cat` command is used to concatenate and display file contents."
                        },
                        {
                            type: "fill-in-blank",
                            question: "The command 'rm -rf *' is used to ____ all files and directories in the current directory.",
                            correctAnswer: "force delete",
                            explanation: "This command is extremely powerful and deletes everything recursively and without confirmation."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the file/directory management command with its function.",
                            pairs: [
                                { stem: "mkdir new_folder", correctOption: "Creates a new directory" },
                                { stem: "rmdir empty_dir", correctOption: "Deletes an empty directory" },
                                { stem: "cp -r source_dir/ dest_dir/", correctOption: "Recursively copies a directory" },
                                { stem: "find my_file.txt", correctOption: "Searches for a file named 'my_file.txt'" },
                                { stem: "echo 'hello' >> log.txt", correctOption: "Appends text to a file" }
                            ]
                        }
                    ]
                },
                "qna-centos-compression": {
                    title: "CentOS: Compression",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">File Compression and Archiving in CentOS</h3>
                        <p class="text-gray-700 mb-4"><strong>Compression</strong> is used to reduce file sizes and bundle multiple files into a single archive. <strong>Tar</strong> is commonly used for archiving, often combined with gzip for compression.</p>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">1. Install Zip Tools</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>dnf install zip unzip</code></strong>: Installs the <code>zip</code> and <code>unzip</code> utilities on Fedora/RHEL-based systems (using <code>dnf</code>, which is the successor to <code>yum</code>). These tools are essential for creating and extracting zip archives.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">2. Zip Files & Directories</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>zip -r backup.zip test1</code></strong>: Creates a zip archive named <code>backup.zip</code> containing the <code>test1</code> directory (the <code>-r</code> flag enables recursive zipping for directories).</li>
                            <li><strong><code>zip -r backup.zip test1 test2</code></strong>: Creates a single zip archive <code>backup.zip</code> containing both <code>test1</code> and <code>test2</code> directories.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">3. Unzip Files</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>unzip backup.zip</code></strong>: Extracts the contents of <code>backup.zip</code> into the current directory.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">4. Tar (Tape Archive)</h4>
                        <p class="text-gray-700 mb-4">Tar is primarily an archiving utility, bundling multiple files or directories into a single <code>.tar</code> file. It's often used with compression tools like gzip.</p>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">5. Create Tar Archive</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>tar -zcvf backup.tar test1</code></strong>: Creates a gzipped tar archive (<code>.tar.gz</code> or <code>.tgz</code>) named <code>backup.tar</code> containing the <code>test1</code> directory.</li>
                            <li><strong><code>tar -zcvf backup.tar test1 test2</code></strong>: Creates a gzipped tar archive <code>backup.tar</code> containing both <code>test1</code> and <code>test2</code> directories.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">6. Extract Tar Archive</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>tar -zxvf backup.tar</code></strong>: Extracts the contents of a gzipped tar archive (<code>.tar.gz</code> or <code>.tgz</code>) into the current directory.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">7. Tar Parameters Explained</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>z</code></strong>: Uses gzip compression/decompression.</li>
                            <li><strong><code>c</code></strong>: Creates a new archive.</li>
                            <li><strong><code>x</code></strong>: Extracts files from an archive.</li>
                            <li><strong><code>v</code></strong>: Verbose mode, displaying files processed during archiving/extraction.</li>
                            <li><strong><code>f</code></strong>: Specifies the filename of the archive. This option <em>must</em> be followed immediately by the archive file name.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">8. Backup with Date and Time</h4>
                        <p class="text-gray-700 mb-4">Embedding timestamps in backup filenames is a best practice for versioning.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>tar -zcvf "./backup$(date).tar" important_data</code></strong>: Creates a gzipped tar archive with a filename like <code>backupThu Dec 31 21:30:11 +7 2020.tar</code>. The <code>$(date)</code> command inserts the current date and time.</li>
                            <li><strong><code>tar -zcvf "./backup$(date +%F_%T).tar" important_data</code></strong>: Creates a gzipped tar archive with a more structured filename like <code>backup2020-12-31_21:39:41.tar</code>.
                                <ul class="list-circle list-inside ml-5">
                                    <li><code>+%F</code>: Formats date as ज्यामुळे-MM-DD.</li>
                                    <li><code>%T</code>: Formats time as HH:MM:SS.</li>
                                </ul>
                            </li>
                            <li><strong><code>tar -zcvf "./backup$(date +%y%m%d%H%M%S).tar" data</code></strong>: Creates a gzipped tar archive with a compact numerical timestamp like <code>backup201231213941.tar</code>.
                                <ul class="list-circle list-inside ml-5">
                                    <li><code>%y</code>: Last two digits of year.</li>
                                    <li><code>%m</code>: Month (01-12).</li>
                                    <li><code>%d</code>: Day of month (01-31).</li>
                                    <li><code>%H</code>: Hour (00-23).</li>
                                    <li><code>%M</code>: Minute (00-59).</li>
                                    <li><code>%S</code>: Second (00-59).</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command installs the zip and unzip utilities?",
                            options: [
                                { text: "yum install zip unzip", correct: false }, // dnf is more modern for RHEL/CentOS 8+, but yum still works on older versions and is more commonly known. Keeping dnf for accuracy but noting for user.
                                { text: "dnf install zip unzip", correct: true },
                                { text: "apt-get install zip unzip", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To create a gzipped tar archive of a directory named 'my_files', you would use 'tar -zcvf archive.tar ____'.",
                            correctAnswer: "my_files",
                            explanation: "The `tar` command with the `-zcvf` flags creates a gzipped tar archive of the specified files/directories."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the compression command with its function.",
                            pairs: [
                                { stem: "zip -r archive.zip folder/", correctOption: "Creates a recursive zip archive" },
                                { stem: "unzip archive.zip", correctOption: "Extracts a zip archive" },
                                { stem: "tar -zxvf archive.tar", correctOption: "Extracts a gzipped tar archive" }
                            ]
                        }
                    ]
                },
                "qna-centos-crontab": {
                    title: "CentOS: Crontab – Scheduled Tasks",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Scheduling Tasks with Crontab in CentOS</h3>
                        <p class="text-gray-700 mb-4"><strong>Crontab</strong> is a powerful utility in Linux for scheduling commands or scripts to run automatically at specified intervals. It's essential for automation and routine tasks.</p>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">1. Crontab Service Management</h4>
                        <p class="text-gray-700 mb-4">On systems using <code>systemd</code> (like modern CentOS/RHEL), the cron service is often managed by <code>crond</code>.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>service crond status</code></strong>: Checks the current status of the crond service (running, stopped, etc.).</li>
                            <li><strong><code>service crond stop</code></strong>: Stops the crond service.</li>
                            <li><strong><code>service crond start</code></strong>: Starts the crond service.</li>
                            <li><strong><code>service crond restart</code></strong>: Restarts the crond service.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">2. Edit & View Crontab</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>crontab -e</code></strong>: Opens your user's crontab file for editing. If it's the first time, it might ask you to choose an editor (e.g., vi, nano).</li>
                            <li><strong><code>crontab -l</code></strong>: Lists the current crontab entries for your user.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">3. Crontab Syntax</h4>
                        <p class="text-gray-700 mb-4">Each line in a crontab file represents a job and follows a specific format:</p>
                        <pre class="bg-gray-100 p-4 rounded-md text-sm mb-4"><code># Mi Ho DM Mo DW <Command>
Mi = Minute (0–59)
Ho = Hour (0–23)
DM = Day of Month (1–31)
Mo = Month (1–12 or Jan–Dec)
DW = Day of Week (0–6, where 0=Sunday or Mon–Sun)
<Command> = The full path to the command or script to execute.</code></pre>
                        <p class="text-gray-700 mb-4">Special characters:</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>*</code></strong>: Wildcard, means "every" (e.g., <code>*</code> in Minute means every minute).</li>
                            <li><strong><code>,</code></strong>: List separator (e.g., <code>1,15</code> in Day of Month means on the 1st and 15th).</li>
                            <li><strong><code>-</code></strong>: Range (e.g., <code>9-17</code> in Hour means from 9 AM to 5 PM).</li>
                            <li><strong><code>/</code></strong>: Step value (e.g., <code>*/5</code> in Minute means every 5 minutes).</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">4. Examples</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>10 20 * * * /sbin/shutdown -h now</code></strong>: Shuts down the system daily at 8:10 PM (20:10).</li>
                            <li><strong><code>*/5 * * * * /sbin/shutdown -h now</code></strong>: Shuts down the system every 5 minutes. (Note: This example is highly disruptive and used for demonstration of syntax).</li>
                            <li><strong><code>* */12 * * * /sbin/shutdown -h now</code></strong>: Shuts down the system every 12 hours (e.g., once at 00:XX and once at 12:XX).</li>
                            <li><strong><code>32 18 17,21,29 11 * /sbin/shutdown -h now</code></strong>: Shuts down the system at 6:32 PM on the 17th, 21th, and 29th of November.</li>
                            <li><strong><code>0 18 * * mon-fri /sbin/shutdown -h now</code></strong>: Shuts down the system at 6:00 PM on weekdays (Monday to Friday).</li>
                            <li><strong><code>0 18-20 * * mon-fri /sbin/shutdown -h now</code></strong>: Shuts down the system every minute between 6:00 PM and 8:59 PM (inclusive) on weekdays.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">5. Using Tar in Crontab</h4>
                        <p class="text-gray-700 mb-4">It's good practice to provide the full path to commands in crontab entries to avoid issues with environment variables.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>0 18 * * mon-fri /usr/bin/tar -zcvf /backup.tar data</code></strong>: This crontab entry will create a gzipped tar archive of the <code>data</code> directory and save it as <code>/backup.tar</code> at 6:00 PM every weekday.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">6. Finding Command Paths for Crontab</h4>
                        <p class="text-gray-700 mb-4">Use the <code>which</code> command to find the full path of an executable, which is useful when specifying commands in crontab.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>which shutdown</code></strong>: Might output <code>/usr/sbin/shutdown</code></li>
                            <li><strong><code>which reboot</code></strong>: Might output <code>/usr/sbin/reboot</code></li>
                            <li><strong><code>which tar</code></strong>: Might output <code>/usr/bin/tar</code></li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command is used to edit your user's crontab file?",
                            options: [
                                { text: "crontab -l", correct: false },
                                { text: "crontab -e", correct: true },
                                { text: "service crond start", correct: false }
                            ]
                        },
                        {
                            type: "multiple-choice",
                            question: "What does the `*` symbol represent in a crontab entry?",
                            options: [
                                { text: "Specific value", correct: false },
                                { text: "Every interval (wildcard)", correct: true },
                                { text: "Range of values", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "The `crond` service is managed using commands like `service crond ____` to check its running status.",
                            correctAnswer: "status",
                            explanation: "`service crond status` displays whether the cron daemon is active."
                        },
                        {
                            type: "fill-in-blank",
                            question: "A crontab entry `0 0 1 * * <command>` will execute the command on the first day of every ____ at midnight.",
                            correctAnswer: "month",
                            explanation: "The third field in crontab syntax is Day of Month, and `1` signifies the first day."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the crontab syntax example with its scheduled execution time.",
                            pairs: [
                                { stem: "10 20 * * *", correctOption: "Daily at 8:10 PM" },
                                { stem: "*/5 * * * *", correctOption: "Every 5 minutes" },
                                { stem: "0 18 * * mon-fri", correctOption: "Weekdays at 6:00 PM" },
                                { stem: "32 18 17,21,29 11 *", correctOption: "Specific days in November at 6:32 PM" }
                            ]
                        }
                    ]
                },
                "qna-centos-crontabshell": {
                    title: "CentOS: Crontab + Shell Script",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Automating with Crontab and Shell Scripts in CentOS</h3>
                        <p class="text-gray-700 mb-4">Combining Crontab with Shell Scripts allows for powerful automation, as you can write complex sequences of commands in a script and then schedule that script to run at specific times.</p>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">1. Shell Script Location</h4>
                        <p class="text-gray-700 mb-4">It's good practice to place your shell scripts in specific directories:</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>/usr/local/bin/</code></strong>: Recommended for executables that are to be used by all regular users.</li>
                            <li><strong><code>/usr/local/sbin/</code></strong>: Recommended for executables that are to be used primarily by the root user for system administration.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">2. Create a Shell Script</h4>
                        <p class="text-gray-700 mb-4">After creating the script file, you must make it executable.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>touch /usr/local/sbin/test.sh</code></strong>: Creates an empty shell script file named <code>test.sh</code> in the specified root-privileged directory.</li>
                            <li><strong><code>chmod +x /usr/local/sbin/test.sh</code></strong>: Makes the <code>test.sh</code> script executable. This is crucial for the cron daemon to be able to run it.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">3. Crontab Entry to Run Script</h4>
                        <p class="text-gray-700 mb-4">When scheduling a shell script in crontab, always use the full path to the script to ensure it's found and executed correctly, regardless of the cron environment's PATH settings.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>37 22 * * * /usr/local/sbin/test.sh</code></strong>: This crontab entry schedules <code>test.sh</code> to run daily at 10:37 PM (22:37).</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command makes a shell script executable?",
                            options: [
                                { text: "touch script.sh", correct: false },
                                { text: "chmod +x script.sh", correct: true },
                                { text: "execute script.sh", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "A good location for shell scripts intended for regular users is `____`.",
                            correctAnswer: "/usr/local/bin/",
                            explanation: "`/usr/local/bin/` is a standard location for user-executable scripts."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the shell script related command/concept to its purpose.",
                            pairs: [
                                { stem: "/usr/local/sbin/", correctOption: "Recommended directory for root's shell scripts" },
                                { stem: "chmod +x", correctOption: "Grants executable permissions to a script" },
                                { stem: "crontab entry with full path", correctOption: "Ensures script runs correctly from cron" }
                            ]
                        }
                    ]
                },
                "qna-centos-tar-shell-crontab": {
                    title: "CentOS: Tar + Shell + Crontab",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Automated Backups: Tar + Shell + Crontab in CentOS</h3>
                        <p class="text-gray-700 mb-4">This section demonstrates a practical application of combining the <strong>Tar</strong> command, <strong>Shell Scripts</strong>, and <strong>Crontab</strong> for automated system backups. This is a common practice for system administrators.</p>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">1. Shell Script for Backup</h4>
                        <p class="text-gray-700 mb-4">First, you create a shell script that performs the backup operation. This script typically uses <code>tar</code> to archive and compress data and often incorporates the <code>date</code> command for timestamping the backup files.</p>
                        <pre class="bg-gray-100 p-4 rounded-md text-sm mb-4"><code>/usr/bin/tar -zcvf "./backup$(date +%Y%m%d%H%M%S).tar.gz" /path/to/your/data</code></pre>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li>Replace <code>"/path/to/your/data"</code> with the actual directory you want to back up.</li>
                            <li>The <code>$(date +%Y%m%d%H%M%S)</code> part generates a unique timestamp (YearMonthDayHourMinuteSecond) for each backup file, preventing overwrites and making it easy to sort.</li>
                            <li>Make sure this script is executable: <code>chmod +x /backup.sh</code></li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">2. Schedule in Crontab</h4>
                        <p class="text-gray-700 mb-4">Once the backup script is created and made executable, you can schedule it to run periodically using crontab.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong>Edit crontab:</strong> <code>crontab -e</code></li>
                            <li><strong>Add the crontab entry (example):</strong>
                                <pre class="bg-gray-100 p-4 rounded-md text-sm mt-2"><code>0 18 * * * /backup.sh</code></pre>
                                <p class="mt-2">This entry schedules the <code>/backup.sh</code> script to run daily at 6:00 PM (18:00). Remember to use the full path to your script.</p>
                            </li>
                        </ul>
                       
                        <p class="text-gray-700 mt-4">This setup provides a robust automated backup solution where:</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong>Tar</strong> handles the archiving and compression.</li>
                            <li><strong>Shell Script</strong> orchestrates the <code>tar</code> command and adds dynamic elements like timestamps.</li>
                            <li><strong>Crontab</strong> ensures the script runs reliably at predefined times.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "What is the primary benefit of adding `$(date)` to a backup filename in a shell script used with crontab?",
                            options: [
                                { text: "It makes the backup smaller.", correct: false },
                                { text: "It ensures each backup has a unique name, preventing overwrites.", correct: true },
                                { text: "It encrypts the backup file.", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "The part `$(date +%Y%m%d%H%M%S)` in a backup script is used to generate a ____.",
                            correctAnswer: "timestamp",
                            explanation: "This `date` format string creates a numerical timestamp based on year, month, day, hour, minute, and second."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the component of an automated backup solution with its role.",
                            pairs: [
                                { stem: "Tar command", correctOption: "Archives and compresses data" },
                                { stem: "Shell script", correctOption: "Orchestrates commands and adds dynamic logic" },
                                { stem: "Crontab", correctOption: "Schedules automated execution of tasks" },
                                { stem: "date +%F", correctOption: "Generates date in ज्यामुळे-MM-DD format" }
                            ]
                        }
                    ]
                },
                "qna-centos-usergroup": {
                    title: "CentOS: User & Group Management & Permissions",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Managing Users, Groups, and Permissions in CentOS</h3>
                        <p class="text-gray-700 mb-4"><strong>User and Group Management are crucial for controlling access and maintaining security in Linux systems.</strong> This section covers commands for creating, modifying, and deleting user accounts and groups, as well as managing file permissions and ownership.</p>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">1. User Management</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>useradd username</code></strong>: Creates a new user account.</li>
                            <li><strong><code>passwd username</code></strong>: Sets or changes the password for a specified user. You will be prompted to enter the new password twice.</li>
                            <li><strong><code>cat /etc/passwd</code></strong>: Displays the full user information from the password file (contains basic user account information).</li>
                            <li><strong><code>cut -d: -f1 /etc/passwd</code></strong>: Shows only the usernames from the <code>/etc/passwd</code> file by using the 'cut' command to extract the first field, delimited by a colon.</li>
                            <li><strong>Cut Command Examples</strong>:
                                <ul class="list-circle list-inside ml-5">
                                    <li><code>cut -d: -f1 /etc/passwd</code>: Extracts the first field (username).</li>
                                    <li><code>cut -d: -f1-2 /etc/passwd</code>: Extracts the first and second fields.</li>
                                    <li><code>cut -d: -f1,3 /etc/passwd</code>: Extracts the first and third fields.</li>
                                    <li><code>cut -d: -f1-2,6 /etc/passwd</code>: Extracts fields 1-2 and field 6.</li>
                                </ul>
                            </li>
                            <li><strong><code>userdel -r username</code></strong>: Deletes a user account along with their home directory and mail spool (<code>r</code> stands for remove home directory).</li>
                            <li><strong><code>userdel username</code></strong>: Deletes a user account but leaves their home directory intact.</li>
                            <li><strong><code>rm -rf /home/username</code></strong>: Manually deletes a user's home directory if it wasn't removed with <code>userdel -r</code>.</li>
                            <li><strong><code>passwd -d username</code></strong>: Deletes the password for a user, effectively allowing them to log in without a password (not recommended for security).</li>
                            <li><strong><code>chage -d 0 username</code></strong>: Forces a user to change their password on the next login.</li>
                            <li><strong><code>passwd -l username</code></strong>: Locks a user's account, preventing them from logging in.</li>
                            <li><strong><code>passwd -u username</code></strong>: Unlocks a user's account.</li>
                            <li><strong><code>usermod -l newname oldname</code></strong>: Changes the username from <code>oldname</code> to <code>newname</code>.</li>
                            <li><strong><code>usermod -d /home/newname -m newname</code></strong>: Changes the username to <code>newname</code> and moves the old home directory content to <code>/home/newname</code> (the <code>-m</code> option moves the content).</li>
                            <li><strong><code>usermod -eYYYY-MM-DD username</code></strong>: Sets an expiration date for a user account.</li>
                            <li><strong><code>id username</code></strong>: Displays the user and group IDs for a specified user.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">2. Group Management</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>groupadd groupname</code></strong>: Creates a new group.</li>
                            <li><strong><code>cut -d: -f1 /etc/group</code></strong>: Displays only the group names from the <code>/etc/group</code> file.</li>
                            <li><strong><code>groups username</code></strong>: Shows all the groups that a specified user belongs to.</li>
                            <li><strong><code>groupmod -n newname oldname</code></strong>: Renames a group from <code>oldname</code> to <code>newname</code>.</li>
                            <li><strong><code>groupdel groupname</code></strong>: Deletes an existing group.</li>
                            <li><strong><code>useradd -g groupname username</code></strong>: Creates a new user and assigns them to a specific primary group at creation time.</li>
                            <li><strong><code>usermod -a -G groupname username</code></strong>: Adds an <em>existing</em> user to a supplementary group (<code>a</code> for append, <code>G</code> for supplementary group).</li>
                            <li><strong><code>usermod -g newgroup username</code></strong>: Changes a user's <em>primary</em> group to <code>newgroup</code>.</li>
                            <li><strong><code>gpasswd -d username groupname</code></strong>: Removes a user from a specified group.</li>
                            <li><strong><code>gpasswd -M user1,user2 groupname</code></strong>: Adds multiple existing users to a specified group.</li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">3. Permissions and Ownership</h4>
                        <p class="text-gray-700 mb-4">Linux uses a permission system to control who can access and modify files and directories.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>ls</code></strong>: Provides a simple listing of files and directories.</li>
                            <li><strong><code>ls -l</code></strong>: Provides a detailed (long) list of files, including permissions, number of links, owner, group, size, and modification time.</li>
                            <li><strong><code>ll</code></strong>: Often an alias for <code>ls -l</code> for convenience.</li>
                            <li><strong><code>chown owner file_or_dir</code></strong>: Changes the owner of a file or directory.</li>
                            <li><strong><code>chgrp group file_or_dir</code></strong>: Changes the group ownership of a file or directory.</li>
                            <li><strong>Permission Numbers (Octal Representation)</strong>:
                                <ul class="list-circle list-inside ml-5">
                                    <li><strong><code>0</code></strong>: No permission (---)</li>
                                    <li><strong><code>1</code></strong>: Execute (--x)</li>
                                    <li><strong><code>2</code></strong>: Write (-w-)</li>
                                    <li><strong><code>3</code></strong>: Write + Execute (-wx)</li>
                                    <li><strong><code>4</code></strong>: Read (r--)</li>
                                    <li><strong><code>5</code></strong>: Read + Execute (r-x)</li>
                                    <li><strong><code>6</code></strong>: Read + Write (rw-)</li>
                                    <li><strong><code>7</code></strong>: Read + Write + Execute (rwx)</li>
                                </ul>
                            </li>
                            <li><strong><code>chmod -R 770 file_or_dir</code></strong>: Recursively changes permissions of a file or directory and its contents. For example, <code>770</code> gives owner and group full permissions (read, write, execute), and others no permissions.</li>
                            <li><strong>Change Permissions Using Keywords (Symbolic Mode)</strong>:
                                <ul class="list-circle list-inside ml-5">
                                    <li><strong><code>u</code></strong>: user (owner)</li>
                                    <li><strong><code>g</code></strong>: group</li>
                                    <li><strong><code>o</code></strong>: others</li>
                                    <li><strong><code>a</code></strong>: all</li>
                                    <li><strong><code>+</code></strong>: add permission</li>
                                    <li><strong><code>-</code></strong>: remove permission</li>
                                    <li><strong><code>=</code></strong>: set exact permission</li>
                                    <li><strong><code>r</code></strong>: read</li>
                                    <li><strong><code>w</code></strong>: write</li>
                                    <li><strong><code>x</code></strong>: execute</li>
                                    <li><strong><code>chmod u=rw,g=r,o=r file</code></strong>: Sets permissions to <code>rw-r--r--</code> (owner can read/write, group can read, others can read).</li>
                                    <li><strong><code>chmod +x file</code></strong>: Adds execute permission to all (user, group, others).</li>
                                    <li><strong><code>chmod a+x file</code></strong>: Adds execute permission to all users, which is equivalent to 'chmod +x file'.</li>
                                    <li><strong><code>chmod og-rwx file</code></strong>: Removes read, write, and execute permissions from group and others.</li>
                                </ul>
                            </li>
                        </ul>
                       
                        <h4 class="text-xl font-semibold mt-6 mb-3">4. Link Files</h4>
                        <p class="text-gray-700 mb-4">Links are pointers to files or directories, offering flexible ways to organize your file system.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong><code>ln source.txt link.txt</code></strong>: Creates a <strong>hard link</strong> to <code>source.txt</code> named <code>link.txt</code>. Hard links are direct pointers to the inode of the source file; they must be on the same file system and cannot link to directories. Deleting the source does not delete the data if other hard links exist.</li>
                            <li><strong><code>ls -i</code></strong>: Displays the inode number of files. Files with the same inode number are hard links to each other.</li>
                            <li><strong><code>ln -s source.txt link.txt</code></strong>: Creates a <strong>soft (symbolic) link</strong> (also known as a symlink) to <code>source.txt</code> named <code>link.txt</code>. Soft links are like shortcuts; they contain the path to the original file and can link across file systems and to directories. If the source file is deleted, the soft link becomes broken.</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which command is used to add a new user without setting a password initially?",
                            options: [
                                { text: "useradd -p username", correct: false },
                                { text: "useradd username; passwd -d username", correct: true },
                                { text: "adduser username", correct: false }
                            ]
                        },
                        {
                            type: "multiple-choice",
                            question: "To add an existing user named 'developer' to a supplementary group named 'web_devs', which command is correct?",
                            options: [
                                { text: "useradd -g web_devs developer", correct: false },
                                { text: "usermod -a -G web_devs developer", correct: true },
                                { text: "gpasswd -a developer web_devs", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "To display only the usernames from the `/etc/passwd` file, you can use `cut -d: -f____ /etc/passwd`.",
                            correctAnswer: "1",
                            explanation: "The `-f1` option specifies to extract the first field, which is the username."
                        },
                        {
                            type: "fill-in-blank",
                            question: "To delete a user and their home directory, the command is 'userdel ____ username'.",
                            correctAnswer: "-r",
                            explanation: "The `-r` flag for `userdel` ensures the user's home directory is also removed."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the command or concept with its description in user and group management.",
                            pairs: [
                                { stem: "passwd username", correctOption: "Sets or changes a user's password" },
                                { stem: "usermod -l newname oldname", correctOption: "Changes a user's login name" },
                                { stem: "groupadd groupname", correctOption: "Creates a new group" },
                                { stem: "chmod 770 file", correctOption: "Sets read, write, execute for owner and group, no permissions for others" },
                                { stem: "ln -s source target", correctOption: "Creates a symbolic (soft) link" }
                            ]
                        },
                        {
                            type: "multiple-choice",
                            question: "What is the numerical permission for 'Read + Write'?",
                            options: [
                                { text: "3", correct: false },
                                { text: "6", correct: true },
                                { text: "7", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "A hard link and its source file share the same ____ ID.",
                            correctAnswer: "inode",
                            explanation: "Hard links point directly to the same data on disk via the inode."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the permission concept with its meaning.",
                            pairs: [
                                { stem: "u=rw", correctOption: "Owner has read and write permissions" },
                                { stem: "g+x", correctOption: "Add execute permission to group" },
                                { stem: "o-rwx", correctOption: "Remove all permissions from others" },
                                { stem: "chmod +x", correctOption: "Add execute permission to all users" }
                            ]
                        }
                    ]
                },
            },
            cloud: {
                "qna-cloud": { // Kept original key for cloud
                    title: "Cloud Basics", // Added a title for clearer display
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Introduction to Cloud Computing</h3>
                        <p class="text-gray-700 mb-4">Cloud computing is a transformative technology that allows users to access and utilize computing resources over the internet. It offers flexibility, scalability, and cost-effectiveness, making it a popular choice for businesses and individuals alike.</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong>What is Cloud Computing?</strong>: Cloud computing refers to the delivery of computing services (servers, storage, databases, networking, software) over the internet ("the cloud") rather than using local servers or personal devices.</li>
                            <li><strong>Benefits of Cloud Computing</strong>: Key benefits include cost savings (no need for physical hardware), scalability (easily adjust resources as needed), accessibility (access from anywhere with an internet connection), and reliability (data is often backed up and secure).</li>
                            <li><strong>Types of Cloud Services</strong>: There are three main types of cloud services:
                                <ul class="list-circle list-inside ml-4 mt-2 space-y-1">
                                    <li><strong>IaaS (Infrastructure as a Service)</strong>: Provides virtualized computing resources over the internet. Users can rent virtual machines, storage, and networks.</li>
                                    <li><strong>PaaS (Platform as a Service)</strong>: Offers a platform allowing customers to develop, run, and manage applications without dealing with infrastructure complexities.</li>
                                    <li><strong>SaaS (Software as a Service)</strong>: Delivers software applications over the internet on a subscription basis. Users can access these applications via web browsers without installation.</li>
                                </ul>
                            </li>
                            <li><strong>Deployment Models</strong>: Common deployment models include:
                                <ul class="list-circle list-inside ml-4 mt-2 space-y-1">
                                    <li><strong>Public Cloud</strong>: Services are delivered over the public internet and shared among multiple users.</li>
                                    <li><strong>Private Cloud</strong>: Dedicated resources for a single organization, providing more control and security.</li>
                                    <li><strong>Hybrid Cloud</strong>: Combines public and private clouds, allowing data and applications to be shared between them.</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "What does IaaS stand for in cloud computing?",
                            options: [
                                { text: "Infrastructure as a Service", correct: true },
                                { text: "Internet as a Service", correct: false },
                                { text: "Integration as a Service", correct: false }
                            ]
                        },
                        {
                            type: "multiple-choice",
                            question: "Which of the following is NOT a benefit of cloud computing?",
                            options: [
                                { text: "Cost savings", correct: false },
                                { text: "Increased hardware requirements", correct: true },
                                { text: "Scalability", correct: false }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "The deployment model that combines public and private clouds is called a ____ cloud.",
                            correctAnswer: "hybrid",
                            explanation: "A hybrid cloud combines the benefits of both public and private clouds, allowing for greater flexibility."
                        },
                        {
                            type: "fill-in-blank",
                            question: "SaaS stands for ____ as a Service.",
                            correctAnswer: "Software",
                            explanation: "SaaS delivers software applications over the internet on a subscription basis."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the cloud service type with its description.",
                            pairs: [
                                { stem: "IaaS", correctOption: "Infrastructure as a Service" },
                                { stem: "PaaS", correctOption: "Platform as a Service" },
                                { stem: "SaaS", correctOption: "Software as a Service" },
                                { stem: "Public Cloud", correctOption: "Shared resources over the internet" },
                                { stem: "Private Cloud", correctOption: "Dedicated resources for one organization" },
                                { stem: "Hybrid Cloud", correctOption: "Combination of public and private clouds" }
                            ]
                        }
                    ]
                },
                "qna-cloud-intro": {
                    title: "Cloud: Introduction to Cloud Technology",
                    description: `
                        <h3 class="text-2xl font-bold mb-4">Introduction to Cloud Technology and Lab Setup</h3>
                        <p class="text-gray-700 mb-4">Cloud technology fundamentally involves storing IT infrastructure on the internet. This provides flexible access to computing resources without the need for physical hardware on-site.</p>
                        <h4 class="text-xl font-semibold mt-6 mb-3">Foundations of Cloud Computing:</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong>Virtualization</strong>: This is a core concept, allowing a single physical hardware system to run multiple isolated virtual environments (virtual machines).
                                <ul class="list-circle list-inside ml-5">
                                    <li>For <strong>testing and learning</strong>: Examples include VMware Workstation, VirtualBox, and Hyper-V. These are typically installed on a personal computer.</li>
                                    <li>For <strong>production (work environments)</strong>: More robust solutions like ESXi, Proxmox, and Citrix are used.</li>
                                </ul>
                            </li>
                            <li><strong>Containerization</strong>: Another key technology that packages applications and their dependencies into isolated containers. This ensures applications run consistently across different environments. Docker is a popular example.</li>
                        </ul>
                        <h4 class="text-xl font-semibold mt-6 mb-3">Lab Installation for Cloud Computing:</h4>
                        <p class="text-gray-700 mb-4">To practice cloud concepts, you often set up a local lab environment:</p>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong>Virtualization Software</strong>: Install VMware Workstation or VirtualBox on your computer.</li>
                            <li><strong>Operating System Environment</strong>: Install an operating system like Ubuntu Linux Server 22.04 within your virtualization software.</li>
                            <li><strong>Containerization Practice</strong>: Install Docker on your Ubuntu Linux Server to practice containerization.</li>
                        </ul>
                        <h4 class="text-xl font-semibold mt-6 mb-3">Common OS Environments for Cloud Labs:</h4>
                        <ul class="list-disc list-inside text-left text-gray-700 space-y-2">
                            <li><strong>Window Client</strong> (e.g., Windows 11, 10, 7) and <strong>Window Server</strong> (e.g., Windows 2025, 2022, 2019, 2016).</li>
                            <li><strong>MAC</strong> operating systems.</li>
                            <li><strong>Linux</strong> distributions (e.g., CentOS, Redhat, Ubuntu, Debian, Suse, Kali Linux, Fedora).</li>
                        </ul>
                    `,
                    quizQuestions: [
                        {
                            type: "multiple-choice",
                            question: "Which of the following is considered a virtualization software primarily for testing and learning environments?",
                            options: [
                                { text: "ESXi", correct: false },
                                { text: "VirtualBox", correct: true },
                                { text: "Citrix", correct: false }
                            ]
                        },
                        {
                            type: "multiple-choice",
                            question: "What is the core concept where IT infrastructure is stored and accessed over the internet?",
                            options: [
                                { text: "Virtualization", correct: false },
                                { text: "Containerization", correct: false },
                                { text: "Cloud Technology", correct: true }
                            ]
                        },
                        {
                            type: "fill-in-blank",
                            question: "The technology that packages applications and their dependencies into isolated environments for consistent running is called ____.",
                            correctAnswer: "containerization",
                            explanation: "Containerization ensures application consistency across various environments."
                        },
                        {
                            type: "fill-in-blank",
                            question: "For a production work environment, virtualization solutions like ESXi and ____ are commonly used.",
                            correctAnswer: "Proxmox/Citrix",
                            explanation: "ESXi, Proxmox, and Citrix are examples of hypervisors used in production environments."
                        },
                        {
                            type: "match-the-words",
                            question: "Match the virtualization tool/platform with its typical usage scenario.",
                            pairs: [
                                { stem: "VMware Workstation", correctOption: "Testing/Learning" },
                                { stem: "ESXi", correctOption: "Production Environment" },
                                { stem: "Docker", correctOption: "Containerization" },
                                { stem: "Ubuntu Linux Server", correctOption: "Operating system for lab environment" }
                            ]
                        }
                    ]
                },
            },
            // NEW: Custom sentences for Listen & Type
            listenandtype: [
                { 
                    sentence: "Cloud computing refers to the delivery of computing services over the internet.", 
                    khmer: "កុំព្យូទ័រពពកសំដៅលើការផ្តល់សេវាកម្មកុំព្យូទ័រតាមរយៈអ៊ីនធឺណិត។", 
                    answer: "Cloud computing refers to the delivery of computing services over the internet." 
                },
                { 
                    sentence: "Virtualization allows a single physical server to run multiple virtual machines.", 
                    khmer: "Virtualization អនុញ្ញាតឱ្យ server តែមួយដំណើរការ virtual machine ច្រើន។", 
                    answer: "Virtualization allows a single physical server to run multiple virtual machines." 
                },
                { 
                    sentence: "Docker is a popular tool for containerization.", 
                    khmer: "Docker គឺជាឧបករណ៍ដ៏ពេញនិយមសម្រាប់ការប្រើប្រាស់ container។", 
                    answer: "Docker is a popular tool for containerization." 
                },
                { 
                    sentence: "The 'reboot' command is used to restart the system.", 
                    khmer: "ពាក្យបញ្ជា 'reboot' ត្រូវបានប្រើដើម្បីចាប់ផ្តើមប្រព័ន្ធឡើងវិញ។", 
                    answer: "The 'reboot' command is used to restart the system." 
                },
                { 
                    sentence: "To switch to your home directory, use 'cd ~'.", 
                    khmer: "ដើម្បីប្តូរទៅ home directory របស់អ្នក សូមប្រើ 'cd ~'។", 
                    answer: "To switch to your home directory, use 'cd ~'." 
                },
                { 
                    sentence: "The 'ls -l' command shows detailed file information.", 
                    khmer: "ពាក្យបញ្ជា 'ls -l' បង្ហាញព័ត៌មានលម្អិតអំពីឯកសារ។", 
                    answer: "The 'ls -l' command shows detailed file information." 
                },
                { 
                    sentence: "You can create an empty file using the 'touch' command.", 
                    khmer: "អ្នកអាចបង្កើតឯកសារទទេដោយប្រើពាក្យបញ្ជា 'touch'។", 
                    answer: "You can create an empty file using the 'touch' command." 
                },
                { 
                    sentence: "Crontab is used for scheduling automated tasks.", 
                    khmer: "Crontab ត្រូវបានប្រើសម្រាប់កំណត់ពេលកិច្ចការស្វ័យប្រវត្តិ។", 
                    answer: "Crontab is used for scheduling automated tasks." 
                },
                { 
                    sentence: "User and group management are crucial for system security.", 
                    khmer: "ការគ្រប់គ្រងអ្នកប្រើប្រាស់ និងក្រុមមានសារៈសំខាន់សម្រាប់ការការពារប្រព័ន្ធ។", 
                    answer: "User and group management are crucial for system security." 
                },
                { 
                    sentence: "To install packages on CentOS, you can use 'yum' or 'dnf'.", 
                    khmer: "ដើម្បីដំឡើងកញ្ចប់កម្មវិធីនៅលើ CentOS អ្នកអាចប្រើ 'yum' ឬ 'dnf' ។", 
                    answer: "To install packages on CentOS, you can use 'yum' or 'dnf'." 
                },
                {
                    sentence: "The root user has full control in the Linux system.",
                    khmer: "អ្នកប្រើប្រាស់ root មានការគ្រប់គ្រងពេញលេញនៅក្នុងប្រព័ន្ធ Linux ។",
                    answer: "The root user has full control in the Linux system."
                },
                {
                    sentence: "The 'sudo' command allows executing commands with superuser privileges.",
                    khmer: "ពាក្យបញ្ជា 'sudo' អនុញ្ញាតឱ្យប្រតិបត្តិពាក្យបញ្ជាដោយសិទ្ធិ superuser ។",
                    answer: "The 'sudo' command allows executing commands with superuser privileges."
                },
                {
                    sentence: "To check the IP address, you can use 'ip a' or 'ifconfig'.",
                    khmer: "ដើម្បីពិនិត្យមើល IP address អ្នកអាចប្រើ 'ip a' ឬ 'ifconfig' ។",
                    answer: "To check the IP address, you can use 'ip a' or 'ifconfig'."
                },
                {
                    sentence: "The 'cat' command displays the content of a file.",
                    khmer: "ពាក្យបញ្ជា 'cat' បង្ហាញមាតិការបស់ឯកសារ។",
                    answer: "The 'cat' command displays the content of a file."
                },
                {
                    sentence: "Use 'mkdir -p' to create parent directories if they don't exist.",
                    khmer: "ប្រើ 'mkdir -p' ដើម្បីបង្កើត parent directory ប្រសិនបើពួកវាមិនមាន។",
                    answer: "Use 'mkdir -p' to create parent directories if they don't exist."
                },
                {
                    sentence: "The 'tar' command is used for archiving and compression.",
                    khmer: "ពាក្យបញ្ជា 'tar' ត្រូវបានប្រើសម្រាប់ការបង្រួមឯកសារ។",
                    answer: "The 'tar' command is used for archiving and compression."
                },
                {
                    sentence: "Cloud technology involves storing IT infrastructure on the internet.",
                    khmer: "បច្ចេកវិទ្យា Cloud ពាក់ព័ន្ធនឹងការផ្ទុកហេដ្ឋារចនាសម្ព័ន្ធ IT នៅលើអ៊ីនធឺណិត។",
                    answer: "Cloud technology involves storing IT infrastructure on the internet."
                },
                {
                    sentence: "IaaS stands for Infrastructure as a Service.",
                    khmer: "IaaS តំណាងឱ្យ Infrastructure as a Service ។",
                    answer: "IaaS stands for Infrastructure as a Service."
                },
                {
                    sentence: "PaaS offers a platform for developing and managing applications.",
                    khmer: "PaaS ផ្តល់នូវ platform សម្រាប់ការអភិវឌ្ឍន៍ និងគ្រប់គ្រងកម្មវិធី។",
                    answer: "PaaS offers a platform for developing and managing applications."
                },
                {
                    sentence: "SaaS delivers software applications over the internet.",
                    khmer: "SaaS ផ្តល់នូវកម្មវិធី software តាមរយៈអ៊ីនធឺណិត។",
                    answer: "SaaS delivers software applications over the internet."
                }
            ]
        };


        // Game State Management
        const gameState = {
            mode: null,
            currentIndex: 0,
            score: 0,
            currentPool: [],
            currentRule: null, 
            currentLevel: null, 
            currentConversationTopic: null, 
            currentListenAndTypeCategory: null, 
            recognition: null, 
            audioRecorder: null, 
            audioChunks: [],
            synth: window.speechSynthesis, 
            voices: [],
            timerInterval: null, 
            timeLeft: 30, 
            recognitionActive: false 
        };


        // DOM Elements
        const elements = {
            modeSelection: document.getElementById("modeSelection"),
            gameArea: document.getElementById("gameArea"),
            homeLink: document.getElementById("homeLink"),
            aboutLink: document.getElementById("aboutLink"),
            contactLink: document.getElementById("contactLink"),
            resourcesLink: document.getElementById("resourcesLink"),
            navContainer: document.querySelector(".nav-container"), 
            mainHeading: document.querySelector('h1') 
        };


        // Initialize SpeechSynthesis voices
        window.speechSynthesis.onvoiceschanged = () => {
            gameState.voices = gameState.synth.getVoices();
        };


        // Event Listeners (using delegated events for mode selection for efficiency)
        elements.homeLink.addEventListener("click", goHome);
        elements.aboutLink.addEventListener("click", () => showInfoModal("About Us", "This is an interactive learning game designed to help you improve your skills through CentOS Commands and Cloud Basics."));


        // Add profile image dynamically
        const profileImage = document.createElement("img");
        profileImage.src = "https://placehold.co/50x50/add8e6/000000?text=AR"; // Placeholder image - replace with your actual image path
        profileImage.alt = "Profile Image";
        profileImage.className = "profile-image"; // Apply defined styles
        profileImage.addEventListener("click", () => {
            showInfoModal("Profile", "Sovanna! Are you ready to improve yourself step by step? Let's start now! <br> Tomorrow you will see progress!");
        });
        elements.navContainer.prepend(profileImage); // Use prepend to place it before other nav items


        elements.contactLink.addEventListener("click", () => showInfoModal("Contact", "For support or feedback, please email us at: <a href='mailto:rasovanna785@gmail.com' class='text-blue-400 hover:underline'>rasovanna785@gmail.com</a>"));
        elements.resourcesLink.addEventListener("click", () => showInfoModal("Resources", "Check out these helpful resources:<br><ul class='list-disc list-inside mt-2 space-y-1'><li><a href='https://dictionary.cambridge.org/' target='_blank' class='text-blue-400 hover:underline'>Cambridge Dictionary</a></li><li><a href='https://www.bbc.co.uk/learningenglish/' target='_blank' class='text-blue-400 hover:underline'>BBC Learning English</a></li><li><a href='https://www.duolingo.com/' target='_blank' class='text-blue-400 hover:underline'>Duolingo</a></li></ul>"));


        // Use event delegation for mode selection buttons
        elements.modeSelection.addEventListener('click', (event) => {
            // Ensure the clicked element or its parent has the 'mode-btn' class
            const targetButton = event.target.closest('.mode-btn');
            if (targetButton) {
                const mode = targetButton.dataset.mode;
                if (mode) {
                    selectMode(mode);
                }
            }
        });


        // Utility Functions
        function showInfoModal(title, content) {
            clearInterval(gameState.timerInterval); // Stop any active timer
            elements.gameArea.innerHTML = `
                <div class="container text-center">
                    <h2 class="text-3xl font-bold mb-4 text-gray-800">${title}</h2>
                    <div class="question-box p-6 rounded-lg bg-gray-50 text-gray-700 text-lg mb-6 overflow-auto" style="text-align: left; max-height: 400px;">
                        <p>${content}</p>
                    </div>
                    <button class="btn btn-primary text-xl px-8 py-3" onclick="goHome()">Back to Home</button>
                </div>
            `;
            elements.modeSelection.classList.add('hidden'); // Use Tailwind hidden class
            elements.gameArea.classList.remove('hidden'); // Ensure gameArea is visible
        }


        function shuffleArray(array) {
            return [...array].sort(() => 0.5 - Math.random());
        }


        function createButton(text, onClick, className = "btn btn-primary") {
            const button = document.createElement("button");
            button.className = className;
            button.textContent = text;
            button.addEventListener("click", onClick);
            return button;
        }


        function speakText(text, lang = 'en-US') {
            if (!gameState.synth) {
                console.warn("SpeechSynthesis not supported or not ready.");
                return;
            }
            // Cancel any ongoing speech
            gameState.synth.cancel();

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            const englishVoices = gameState.voices.filter(voice => voice.lang.startsWith('en')); // Filter for English voices
            if (englishVoices.length > 0) {
                utterance.voice = englishVoices[0]; // Pick the first English voice
            }
            gameState.synth.speak(utterance);
        }


        function playAudio(path) {
            const audio = new Audio(path);
            audio.play().catch(e => console.error("Error playing audio:", e));
        }


        function startTimer(duration, onTick, onComplete) {
            clearInterval(gameState.timerInterval); // Clear any existing timer
            gameState.timeLeft = duration;
            onTick(gameState.timeLeft); // Initial call

            gameState.timerInterval = setInterval(() => {
                gameState.timeLeft--;
                onTick(gameState.timeLeft);
                if (gameState.timeLeft <= 0) {
                    clearInterval(gameState.timerInterval);
                    onComplete();
                }
            }, 1000);
        }


        function stopTimer() {
            clearInterval(gameState.timerInterval);
            gameState.timerInterval = null;
        }


        // Core Game Functions
        function goHome() {
            resetGameState();
            elements.modeSelection.classList.remove('hidden'); // Show mode selection
            elements.gameArea.classList.add('hidden'); // Hide game area
            elements.gameArea.innerHTML = "";
            elements.mainHeading.textContent = "Quiz App: Test Your Knowledge!";
        }


        function resetGameState() {
            stopTimer(); // Ensure timer is stopped
            if (gameState.recognition && gameState.recognitionActive) {
                gameState.recognition.stop();
                gameState.recognitionActive = false;
            }
            if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
                gameState.audioRecorder.stop();
                gameState.audioRecorder.stream.getTracks().forEach(track => track.stop()); // Stop microphone access
            }
            gameState.audioChunks = []; // Clear recorded audio
            gameState.mode = null;
            gameState.currentIndex = 0;
            gameState.score = 0;
            gameState.currentPool = [];
            gameState.currentRule = null;
            gameState.currentLevel = null;
            gameState.currentConversationTopic = null; 
            gameState.currentListenAndTypeCategory = null; 
            gameState.synth.cancel(); // Stop any ongoing speech
        }


        function selectMode(mode) {
            resetGameState(); // Reset state when a new mode is selected
            gameState.mode = mode;
            elements.modeSelection.classList.add('hidden'); // Hide mode selection
            elements.gameArea.classList.remove('hidden'); // Show game area
            
            let categoryData;
            let headingText = 'Interactive Learning Journey';

            // Determine the category data based on the selected mode
            if (mode.startsWith('qna-centos-')) {
                categoryData = gameData.admin[mode]; // Access directly by the mode key
                headingText = `❓ CentOS: ${categoryData?.title || 'Commands Quiz'}`;
                if (categoryData && categoryData.quizQuestions && categoryData.quizQuestions.length > 0) {
                    gameState.currentPool = shuffleArray(categoryData.quizQuestions);
                    elements.gameArea.innerHTML = `
                        <div class="container qna-game">
                            <h2 class="text-center text-blue-600 mb-4 text-3xl font-semibold">${categoryData.title || headingText.replace('❓ ', '')}</h2>
                            <div class="qna-description question-box mb-6 p-4 rounded-lg bg-gray-50 overflow-auto" style="max-height: 300px;">
                                ${categoryData.description}
                            </div>
                            <button class="btn btn-info w-full mb-4 text-xl py-3" onclick="startQnAGameQuiz()">Start Quiz</button>
                            <button class="btn btn-secondary w-full text-xl py-3" onclick="goHome()">Back to Home</button>
                        </div>
                    `;
                } else {
                    elements.gameArea.innerHTML = `
                        <div class="container text-center">
                            <h2 class="text-3xl font-semibold text-red-600 mb-4">No quiz questions available for this category!</h2>
                            <button class="btn btn-secondary text-xl py-3 mt-4" onclick="goHome()">Back to Home</button>
                        </div>
                    `;
                }
            } else if (mode.startsWith('qna-cloud')) { // Adjusted to start with 'qna-cloud'
                categoryData = gameData.cloud[mode]; // Access by the specific mode key
                headingText = `❓ Cloud: ${categoryData?.title || 'Basics Quiz'}`; // Updated heading
                if (categoryData && categoryData.quizQuestions && categoryData.quizQuestions.length > 0) {
                    gameState.currentPool = shuffleArray(categoryData.quizQuestions);
                    elements.gameArea.innerHTML = `
                        <div class="container qna-game">
                            <h2 class="text-center text-blue-600 mb-4 text-3xl font-semibold">${categoryData.title || headingText.replace('❓ ', '')}</h2>
                            <div class="qna-description question-box mb-6 p-4 rounded-lg bg-gray-50 overflow-auto" style="max-height: 300px;">
                                ${categoryData.description}
                            </div>
                            <button class="btn btn-info w-full mb-4 text-xl py-3" onclick="startQnAGameQuiz()">Start Quiz</button>
                            <button class="btn btn-secondary w-full text-xl py-3" onclick="goHome()">Back to Home</button>
                        </div>
                    `;
                } else {
                    elements.gameArea.innerHTML = `
                        <div class="container text-center">
                            <h2 class="text-3xl font-semibold text-red-600 mb-4">No quiz questions available for this category!</h2>
                            <button class="btn btn-secondary text-xl py-3 mt-4" onclick="goHome()">Back to Home</button>
                        </div>
                    `;
                }
            } else if (mode === 'listen-and-type') {
                headingText = `🎧 Listen & Type Challenge`;
                gameState.currentPool = shuffleArray(allListenTypeSentences); // Use the pre-populated sentences
                if (gameState.currentPool.length > 0) {
                     elements.gameArea.innerHTML = `
                        <div class="container listen-type-game text-center">
                            <h2 class="text-3xl font-semibold text-green-600 mb-6">Welcome to Listen & Type!</h2>
                            <p class="text-gray-700 text-lg mb-6">Listen to the sentence and type exactly what you hear. Pay attention to spelling and punctuation!</p>
                            <button class="btn btn-info w-full mb-4 text-xl py-3" onclick="startListenTypeGame()">Start Listen & Type</button>
                            <button class="btn btn-secondary w-full text-xl py-3" onclick="goHome()">Back to Home</button>
                        </div>
                    `;
                } else {
                     elements.gameArea.innerHTML = `
                        <div class="container text-center">
                            <h2 class="text-3xl font-semibold text-red-600 mb-4">No sentences available for Listen & Type!</h2>
                            <p class="text-gray-700 text-lg mb-6">Descriptions from CentOS and Cloud quizzes are used to generate sentences. Please ensure there are descriptions available.</p>
                            <button class="btn btn-secondary text-xl py-3 mt-4" onclick="goHome()">Back to Home</button>
                        </div>
                    `;
                }
            }


            elements.mainHeading.textContent = `Quiz App: ${headingText.replace('❓ ', '').replace('🎧 ', '')}`; // Update H1
            
        }


        function displayGameEndScreen() {
            stopTimer(); // Ensure the timer is stopped

            let message = '';
            let finalScore = gameState.score;
            const totalItems = gameState.currentPool.length;

            if (gameState.mode.startsWith('qna-')) { 
                message = `You completed the ${gameState.mode.replace('qna-', '').toUpperCase().replace(/-/g, ' ')} Quiz!`; // Improved message for new modes
                message += `<p>Your final score is: <span class="text-blue-600 font-bold text-2xl">${finalScore} / ${totalItems}</span></p>`;
                if (totalItems > 0) {
                    const percentage = (finalScore / totalItems) * 100;
                    if (percentage === 100) {
                        message += '<p class="text-green-600 font-semibold text-xl mt-2">Excellent! Perfect score!</p>';
                    } else if (percentage >= 70) {
                        message += '<p class="text-yellow-600 font-semibold text-xl mt-2">Great job! Keep practicing!</p>';
                    } else {
                        message += '<p class="text-red-600 font-semibold text-xl mt-2">You can do better! Review and try again!</p>';
                    }
                }
            } else if (gameState.mode === 'listen-and-type') {
                message = `You completed the Listen & Type Challenge!`;
                message += `<p>Your final score is: <span class="text-green-600 font-bold text-2xl">${finalScore} / ${totalItems}</span> correctly typed sentences.</p>`;
                if (totalItems > 0) {
                    const percentage = (finalScore / totalItems) * 100;
                    if (percentage === 100) {
                        message += '<p class="text-green-600 font-semibold text-xl mt-2">Fantastic! You\'ve got great listening and typing skills!</p>';
                    } else if (percentage >= 70) {
                        message += '<p class="text-yellow-600 font-semibold text-xl mt-2">Well done! A little more practice and you\'ll master it!</p>';
                    } else {
                        message += '<p class="text-red-600 font-semibold text-xl mt-2">Keep practicing! Every attempt helps you improve.</p>';
                    }
                }
            } else {
                message = `Challenge Complete!`;
                message += `<p>Your final score: <span class="text-blue-600 font-bold text-2xl">${finalScore}</span></p>`;
            }

            elements.gameArea.innerHTML = `
                <div class="container game-end-screen text-center">
                    <h2 class="text-4xl font-bold mb-6 text-gray-800">Challenge Complete!</h2>
                    <div class="result-box bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                        ${message}
                    </div>
                    <div class="flex flex-col md:flex-row justify-center gap-4">
                        <button class="btn btn-primary btn-lg text-xl py-3 px-6" onclick="handlePlayAgain()">Play Again</button>
                        <button class="btn btn-secondary btn-lg text-xl py-3 px-6" onclick="goHome()">Back to Home</button>
                    </div>
                </div>
            `;
            elements.modeSelection.classList.add('hidden');
            elements.gameArea.classList.remove('hidden');
        }

        // Function to handle "Play Again" button click
        function handlePlayAgain() {
            const currentMode = gameState.mode;
            resetGameState(); // Reset state for a new game
            selectMode(currentMode); // Start the game again in the same mode
        }

        // Q&A Game Functions (for CentOS and Cloud quizzes)
        function initQnAGame(mode) {
            // This function is now effectively merged into `selectMode`
            // `selectMode` now directly handles fetching the correct category data and displaying the initial screen.
            // The `gameState.currentPool` is populated by `selectMode` as well.
            // So, we just need to start the quiz here.
            startQnAGameQuiz();
        }

        function startQnAGameQuiz() {
            gameState.currentIndex = 0; // Reset index for the quiz
            gameState.score = 0; // Reset score for the quiz
            displayQnAGameQuestion();
        }


        function displayQnAGameQuestion() {
            stopTimer(); 
            if (gameState.currentIndex >= gameState.currentPool.length) {
                displayGameEndScreen();
                return;
            }

            const currentQuestion = gameState.currentPool[gameState.currentIndex];
            let questionHtml = '';
            let optionsHtml = '';
            let actionButtonHtml = '';

            const scoreTimerDisplay = `
                <div class="score-timer-container">
                    <div class="score">Score: <span id="score">${gameState.score}</span></div>
                    <div class="question-count">Question: ${gameState.currentIndex + 1} / ${gameState.currentPool.length}</div>
                </div>
            `;

            switch (currentQuestion.type) {
                case "multiple-choice":
                    questionHtml = `<h3 class="text-xl font-semibold mb-4">${currentQuestion.question}</h3>`;
                    optionsHtml = `<div class="quiz-options-grid">
                        ${shuffleArray(currentQuestion.options).map((option) => `
                            <button class="btn btn-outline-primary w-full text-left quiz-option-btn" data-correct="${option.correct}" onclick="checkQnAAnswer(this, '${option.text}', '${currentQuestion.type}')">${option.text}</button>
                        `).join('')}
                    </div>`;
                    break;
                case "fill-in-blank":
                    questionHtml = `<h3 class="text-xl font-semibold mb-4">${currentQuestion.question.replace('____', '<input type="text" id="fillInBlankAnswer" class="fill-in-blank-input p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type your answer here">')}</h3>`;
                    actionButtonHtml = `<button class="btn btn-primary mt-4 w-full text-xl py-3" onclick="checkQnAAnswer(this, document.getElementById('fillInBlankAnswer').value, '${currentQuestion.type}')">Submit Answer</button>`;
                    break;
                case "match-the-words":
                    questionHtml = `<h3 class="text-xl font-semibold mb-4">${currentQuestion.question}</h3>`;
                    optionsHtml = `<div class="match-the-words-container">
                        ${currentQuestion.pairs.map((pair) => { // Removed index as it's not needed for shuffling correct options here
                            const shuffledOptions = shuffleArray(currentQuestion.pairs.map(p => p.correctOption));
                            return `
                                <div class="match-pair">
                                    <span>${pair.stem}</span>
                                    <select class="match-select" data-stem="${pair.stem}">
                                        <option value="">Select an option</option>
                                        ${shuffledOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                                    </select>
                                </div>
                            `;
                        }).join('')}
                    </div>`;
                    actionButtonHtml = `<button class="btn btn-primary mt-4 w-full text-xl py-3" onclick="checkQnAAnswer(this, null, '${currentQuestion.type}')">Submit Answers</button>`;
                    break;
            }

            elements.gameArea.innerHTML = `
                <div class="container quiz-question-display">
                    ${scoreTimerDisplay}
                    <div class="question-box mt-4">
                        ${questionHtml}
                        ${optionsHtml}
                    </div>
                    <p id="feedback" class="mt-3 feedback-message"></p>
                    ${actionButtonHtml}
                    <button class="btn btn-secondary mt-4 w-full text-xl py-3" onclick="goHome()">Exit Quiz</button>
                </div>
            `;
        }


        function checkQnAAnswer(buttonElement, selectedAnswer, questionType) {
            const currentQuestion = gameState.currentPool[gameState.currentIndex];
            const feedbackElement = document.getElementById('feedback');
            let isCorrect = false;

            // Disable all interactive elements immediately upon submission
            if (questionType === "multiple-choice") {
                elements.gameArea.querySelectorAll('.quiz-option-btn').forEach(btn => btn.disabled = true);
            } else if (questionType === "fill-in-blank") {
                const inputElement = document.getElementById('fillInBlankAnswer');
                if (inputElement) inputElement.disabled = true;
                if (buttonElement) buttonElement.disabled = true;
            } else if (questionType === "match-the-words") {
                if (buttonElement) buttonElement.disabled = true;
                elements.gameArea.querySelectorAll('.match-select').forEach(select => select.disabled = true);
            }

            if (questionType === "multiple-choice") {
                const correctOptionText = currentQuestion.options.find(opt => opt.correct).text;
                if (selectedAnswer === correctOptionText) {
                    isCorrect = true;
                    buttonElement.classList.add('btn-success');
                } else {
                    buttonElement.classList.add('btn-danger');
                    // Highlight the correct answer
                    elements.gameArea.querySelectorAll('.quiz-option-btn').forEach(btn => {
                        if (btn.dataset.correct === 'true') {
                            btn.classList.add('btn-success');
                        }
                    });
                }
            } else if (questionType === "fill-in-blank") {
                const inputElement = document.getElementById('fillInBlankAnswer');
                // Normalize answers for comparison (case-insensitive, trim whitespace)
                const userAnswer = (selectedAnswer || "").trim().toLowerCase(); // Handle potential null/undefined selectedAnswer
                const correctAnswers = currentQuestion.correctAnswer.split('/').map(ans => ans.trim().toLowerCase()); // Handle multiple correct answers like "halt/shutdown"

                if (correctAnswers.includes(userAnswer)) {
                    isCorrect = true;
                    if (inputElement) inputElement.classList.add('!border-green-500', '!ring-green-500'); // Tailwind classes for green border/ring
                } else {
                    if (inputElement) inputElement.classList.add('!border-red-500', '!ring-red-500'); // Tailwind classes for red border/ring
                }
                // Display correct answer if incorrect
                if (!isCorrect) {
                    feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct answer was: <strong>${currentQuestion.correctAnswer}</strong>. ${currentQuestion.explanation || ''}</p>`;
                }
            } else if (questionType === "match-the-words") {
                let allMatchedCorrectly = true;
                const userSelections = {};
                elements.gameArea.querySelectorAll('.match-select').forEach(select => {
                    const stem = select.dataset.stem;
                    userSelections[stem] = select.value;
                });

                currentQuestion.pairs.forEach(pair => {
                    const selectElement = elements.gameArea.querySelector(`[data-stem="${pair.stem}"]`);
                    if (userSelections[pair.stem] === pair.correctOption) {
                        // Correct match
                        if (selectElement) selectElement.classList.add('!border-green-500', '!ring-green-500');
                    } else {
                        // Incorrect match
                        allMatchedCorrectly = false;
                        if (selectElement) {
                            selectElement.classList.add('!border-red-500', '!ring-red-500');
                            // Option to show correct answer on the dropdown
                            const correctOptionHtml = `<option value="${pair.correctOption}" selected disabled>${pair.correctOption} (Correct)</option>`;
                            selectElement.insertAdjacentHTML('beforeend', correctOptionHtml);
                        }
                    }
                });
                isCorrect = allMatchedCorrectly;
            }

            if (isCorrect) {
                gameState.score++;
                feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉</p>`;
            } else {
                if (questionType !== "fill-in-blank") { // Fill-in-blank already set its specific message
                    let correctAnswerDisplay = '';
                    if (currentQuestion.type === "multiple-choice") {
                        correctAnswerDisplay = currentQuestion.options.find(opt => opt.correct)?.text || 'N/A'; // Added fallback
                    } else if (currentQuestion.type === "match-the-words") {
                        correctAnswerDisplay = "See highlighted correct answers above.";
                    }
                    feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct answer was: <strong>${correctAnswerDisplay}</strong></p>`;
                }
            }
            document.getElementById('score').textContent = gameState.score;

            feedbackElement.classList.add('show'); // Show feedback message

            setTimeout(() => {
                feedbackElement.classList.remove('show'); // Hide feedback
                gameState.currentIndex++;
                displayQnAGameQuestion();
            }, 2000); // Wait 2 seconds before next question
        }

        // Listen and Type Game Functions
        let allListenTypeSentences = []; // Global array to store extracted sentences

        // Function to extract plain text from HTML and split into sentences
        function extractSentences(htmlString) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            const textContent = doc.body.textContent || "";

            // Regex to split by sentence-ending punctuation (., !, ?) followed by whitespace,
            // but keep the punctuation with the sentence.
            // Also, consider sentences ending with quotes.
            // Filters out very short sentences (e.g., single letters or numbers) and very long ones.
            const sentences = textContent.match(/(\b[^.!?]+[.!?]*["']?|[^.!?]+[.!?]*)\s*/g) || [];

            return sentences.map(s => s.trim())
                            .filter(s => s.length > 5 && s.length < 200); // Filter out too short/long sentences
        }

        // Populate allListenTypeSentences from gameData
        function populateListenTypeSentences() {
            allListenTypeSentences = [];

            // Prioritize custom sentences if available
            if (gameData.listenandtype && gameData.listenandtype.length > 0) {
                allListenTypeSentences = gameData.listenandtype;
                console.log("Using custom Listen & Type sentences. Total:", allListenTypeSentences.length);
                return; // Stop here if custom data is used
            }

            // Fallback to extracting from quiz descriptions
            for (const categoryKey in gameData) {
                // Ensure we only process quiz categories, not the new 'listenandtype' category itself
                if (categoryKey === 'listenandtype') continue; 
                for (const quizKey in gameData[categoryKey]) {
                    const description = gameData[categoryKey][quizKey].description;
                    if (description) {
                        const sentences = extractSentences(description);
                        allListenTypeSentences.push(...sentences.map(s => ({ sentence: s, khmer: "", answer: s }))); // Format extracted sentences
                    }
                }
            }
            console.log("No custom Listen & Type sentences found. Extracted from quizzes. Total:", allListenTypeSentences.length);
        }

        // Call this on script load after gameData is defined
        document.addEventListener('DOMContentLoaded', populateListenTypeSentences);

        function startListenTypeGame() {
            gameState.currentIndex = 0;
            gameState.score = 0;
            gameState.currentPool = shuffleArray(allListenTypeSentences); // Shuffle for each new game
            if (gameState.currentPool.length === 0) {
                showInfoModal("No Sentences Available", "It seems there are no sentences extracted from the current lessons. Please ensure lesson descriptions contain text for the 'Listen & Type' game or add custom sentences in the gameData.listenandtype array.");
                return;
            }
            displayListenTypeQuestion();
        }

        function displayListenTypeQuestion() {
            stopTimer();
            if (gameState.currentIndex >= gameState.currentPool.length) {
                displayGameEndScreen();
                return;
            }

            const currentItem = gameState.currentPool[gameState.currentIndex];
            const scoreDisplay = `<div class="score-timer-container">
                                        <div class="score">Score: <span id="score">${gameState.score}</span></div>
                                        <div class="question-count">Sentence: ${gameState.currentIndex + 1} / ${gameState.currentPool.length}</div>
                                  </div>`;

            elements.gameArea.innerHTML = `
                <div class="container listen-type-question text-center">
                    ${scoreDisplay}
                    <div class="question-box mt-4 p-6">
                        <h3 class="text-xl font-semibold mb-4 text-gray-800">Listen carefully and type the sentence:</h3>
                        <div class="flex flex-col items-center space-y-4">
                            <button class="btn btn-info text-xl py-3 px-6" onclick="speakText(gameState.currentPool[gameState.currentIndex].sentence)">
                                <i class="fas fa-volume-up mr-2"></i> Listen Again
                            </button>
                            <input type="text" id="listenTypeInput" 
                                class="w-full max-w-lg p-3 border-2 border-gray-300 rounded-lg text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                placeholder="Type the sentence here...">
                            <button class="btn btn-primary text-xl py-3 px-6 w-full max-w-xs" onclick="checkListenTypeAnswer()">
                                Submit Answer
                            </button>
                            ${currentItem.khmer ? `<button class="btn btn-secondary text-sm py-2 px-4 mt-2" onclick="document.getElementById('khmerHint').classList.toggle('hidden');">
                                <i class="fas fa-language mr-2"></i> Show Khmer Hint
                            </button>
                            <p id="khmerHint" class="text-gray-600 text-lg mt-2 hidden">${currentItem.khmer}</p>` : ''}
                        </div>
                    </div>
                    <p id="feedback" class="mt-4 feedback-message"></p>
                    <button class="btn btn-secondary mt-6 w-full text-xl py-3" onclick="goHome()">Exit Game</button>
                </div>
            `;
            // Focus on the input field and speak the sentence automatically
            const inputField = document.getElementById('listenTypeInput');
            if (inputField) {
                inputField.focus();
                speakText(currentItem.sentence);
            }
        }

        // Helper to normalize text for comparison (lowercase, remove most punctuation, reduce multiple spaces)
        function normalizeText(text) {
            // This normalization is for lenient checking. For strict checking, use exact string.
            // For now, let's keep it simple and just trim for user's requested exact answer.
            return text.trim();
        }

        function checkListenTypeAnswer() {
            const userInput = document.getElementById('listenTypeInput').value;
            const currentItem = gameState.currentPool[gameState.currentIndex];
            const originalAnswer = currentItem.answer; // Use the specific 'answer' field
            const feedbackElement = document.getElementById('feedback');

            // Compare directly as requested for 'exact' answer
            const isCorrect = (userInput.trim() === originalAnswer.trim());

            // Disable input and submit button immediately
            document.getElementById('listenTypeInput').disabled = true;
            elements.gameArea.querySelector('.btn-primary').disabled = true;

            if (isCorrect) {
                gameState.score++;
                feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉</p>`;
            } else {
                feedbackElement.innerHTML = `
                    <p class="error-message">Incorrect. 🤔</p>
                    <p class="text-gray-700 text-base mt-2">Your answer: "${userInput}"</p>
                    <p class="text-gray-700 text-base">Correct: "${originalAnswer}"</p>
                `;
                 // Show Khmer hint if it exists and answer is incorrect
                if (currentItem.khmer) {
                    const khmerHintElement = document.getElementById('khmerHint');
                    if (khmerHintElement) {
                        khmerHintElement.classList.remove('hidden');
                        const showKhmerBtn = elements.gameArea.querySelector('button[onclick*="showKhmerHint"]');
                        if (showKhmerBtn) showKhmerBtn.style.display = 'none'; // Hide the hint button if hint is shown
                    }
                }
            }
            document.getElementById('score').textContent = gameState.score;
            feedbackElement.classList.add('show');

            setTimeout(() => {
                feedbackElement.classList.remove('show');
                gameState.currentIndex++;
                displayListenTypeQuestion();
            }, 5000); // Give user time to read correct answer
        }

    
