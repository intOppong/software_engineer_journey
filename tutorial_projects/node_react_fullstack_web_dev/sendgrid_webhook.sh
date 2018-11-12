# LocalTunnel crash Fix

function localtunnel {
  lt -s jklfshiewfbkjdsbak --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
