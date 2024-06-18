---
sidebar_position: 1
---

# Linux Commands Cheatsheet

## Basic Commands

1. **id** - Find out user and group names and numeric IDs (UID or group ID) of the current user or any other user on the server.
   ```sh
   id -u root
   ```

2. **cd** - Change Directory: Navigate to a different directory.
   ```sh
   cd /home/user/documents
   ```

3. **pwd** - Print Working Directory: Display the current directory's full path.
   ```sh
   pwd
   ```

4. **mkdir** - Make Directory: Create a new directory.
   ```sh
   mkdir new_folder
   ```

5. **rm** - Remove: Delete files or directories.
   ```sh
   rm file.txt
   ```

6. **cp** - Copy: Copy files or directories.
   ```sh
   cp file.txt /backup
   ```

7. **mv** - Move: Move files or directories.
   ```sh
   mv file.txt /new_location
   ```

8. **touch** - Create Empty File: Create a new empty file.
   ```sh
   touch new_file.txt
   ```

9. **cat** - Concatenate and Display: View the content of a file.
   ```sh
   cat file.txt
   ```

10. **nano** - Text Editor: Open a text file for editing.
    ```sh
    nano file.txt
    ```

11. **grep** - Search Text: Search for text patterns in files.
    ```sh
    grep "pattern" file.txt
    ```

12. **find** - Search Files and Directories: Search for files and directories.
    ```sh
    find /path/to/search -name "file_name"
    ```

13. **chmod** - Change File Permissions: Modify file permissions.
    ```sh
    chmod 755 file.sh
    ```

14. **chown** - Change Ownership: Change the owner and group of a file or directory.
    ```sh
    chown user:group file.txt
    ```

15. **ps** - Process Status: Display running processes.
    ```sh
    ps aux
    ```

16. **top** - Monitor System Activity: Monitor system processes in real-time.
    ```sh
    top
    ```

17. **kill** - Terminate Processes: Terminate a process using its ID.
    ```sh
    kill PID
    ```

18. **wget** - Download Files: Download files from the internet.
    ```sh
    wget https://example.com/file.zip
    ```

19. **curl** - Transfer Data with URLs: Transfer data to or from a server.
    ```sh
    curl -O https://example.com/file.txt
    ```

20. **tar** - Archive and Extract: Create or extract compressed archive files.
    ```sh
    tar -czvf archive.tar.gz folder
    ```

21. **ssh** - Secure Shell: Connect to a remote server securely.
    ```sh
    ssh user@remote_host
    ```

22. **scp** - Securely Copy Files: Copy files between local and remote systems using SSH.
    ```sh
    scp file.txt user@remote_host:/path
    ```

23. **rsync** - Remote Sync: Synchronize files and directories between systems.
    ```sh
    rsync -avz local_folder/ user@remote_host:remote_folder/
    ```

24. **df** - Disk Free Space: Display disk space usage.
    ```sh
    df -h
    ```

25. **du** - Disk Usage: Show the size of files and directories.
    ```sh
    du -sh /path/to/directory
    ```

26. **ifconfig** - Network Configuration: Display or configure network interfaces (deprecated, use ip).
    ```sh
    ifconfig
    ```

27. **ip** - IP Configuration: Manage IP addresses and network settings.
    ```sh
    ip addr show
    ```

28. **netstat** - Network Statistics: Display network connections and statistics (deprecated, use ss).
    ```sh
    netstat -tuln
    ```

29. **systemctl** - System Control: Manage system services using systemd.
    ```sh
    systemctl start service_name
    ```

30. **journalctl** - Systemd Journal: View system logs using systemd's journal.
    ```sh
    journalctl -u service_name
    ```

31. **free** - Display the total amount of free space available.
    ```sh
    free -m
    ```

32. **at** - Execute Commands Later: Run commands at a specified time.
    ```sh
    echo "command" | at 15:30
    ```

33. **ping** - Network Connectivity: Check network connectivity to a host.
    ```sh
    ping google.com
    ```

34. **traceroute** - Trace Route: Trace the route packets take to reach a host.
    ```sh
    traceroute google.com
    ```

35. **curl** - Check Website Connectivity: Check if a website is up.
    ```sh
    curl -Is https://example.com | head -n 1
    ```

36. **dig** - Domain Information Groper: Retrieve DNS information for a domain.
    ```sh
    dig example.com
    ```

37. **hostname** - Display or Set Hostname: Display or change the system's hostname.
    ```sh
    hostname
    ```

38. **who** - Display Users: Display currently logged-in users.
    ```sh
    who
    ```

39. **useradd** - Add User: Create a new user account.
    ```sh
    useradd newuser
    ```

40. **usermod** - Modify User: Modify user account properties.
    ```sh
    usermod -aG groupname username
    ```

41. **passwd** - Change Password: Change user password.
    ```sh
    passwd username
    ```

42. **sudo** - Superuser Do: Execute commands as the superuser.
    ```sh
    sudo command
    ```

43. **lsof** - List Open Files: List open files and processes using them.
    ```sh
    lsof -i :port
    ```

44. **nc** - Netcat: Networking utility to read and write data across network connections.
    ```sh
    echo "Hello" | nc host port
    ```

45. **scp** - Secure Copy Between Hosts: Copy files securely between hosts.
    ```sh
    scp file.txt user@remote_host:/path
    ```

46. **sed** - Stream Editor: Text manipulation using regex.
    ```sh
    sed 's/old/new/g' file.txt
    ```

47. **awk** - Text Processing: Pattern scanning and text processing.
    ```sh
    awk '{print $2}' file.txt
    ```

48. **cut** - Text Column Extraction: Extract specific columns from text.
    ```sh
    cut -d"," -f2 file.csv
    ```

49. **sort** - Sort Lines: Sort lines of text files.
    ```sh
    sort file.txt
    ```

50. **diff** - File Comparison: Compare two files and show differences.
    ```sh
    diff file1.txt file2.txt
    ```

51. **ls** - List Files and Directories: List the contents of a directory.
    ```sh
    ls -la
    ```

52. **history** - View the previously executed command.
    ```sh
    history 10
    ```

53. **cron** - Schedule Tasks: Manage scheduled tasks.
    ```sh
    crontab -e
    ```

54. **ssh-keygen** - Generate a public/private authentication key pair for SSH.
    ```sh
    ssh-keygen
    ```

55. **nslookup** - Name server Lookup: Tool for checking DNS hostname to IP or IP to hostname.
    ```sh
    nslookup google.com
    ```

56. **tr** - Translate or delete characters.
    ```sh
    cat crazy.txt | tr "[a-z]" "[A-Z]"
    ```

57. **tnc** - Test Network Connection: Displays diagnostic information for a connection.
    ```sh
    tnc google.com --port 443
    ```

58. **w** - Displays current user.
    ```sh
    w
    ```

59. **su** - Switch User.
    ```sh
    su - root
    ```

60. **ac** - Total connect time for all users or specified users.
    ```sh
    ac john
    ```

These commands cover a wide range of tasks that are essential for DevOps professionals working with Linux systems. Remember to always refer to the man pages (`man command`) for more detailed information about each command and its options.
