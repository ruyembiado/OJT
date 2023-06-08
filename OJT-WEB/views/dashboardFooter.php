<?php if (isset($_SESSION['isLogin'])) : ?>
    </div>
    </div>
<?php endif; ?>
<footer class="footer bg-dark text-center text-white mt-4" id="footer">

    <!-- Copyright -->
    <?php if (!isset($_SESSION['isLogin'])) : ?>
        <div class="text-center p-3 bg-dark">
            © 2023 Copyright:
            <a class="text-white text-decoration-none" href="https://mdbootstrap.com/">Iloilo Science and Technology</a>
        </div>
    <?php endif; ?>
    <!-- Copyright -->

</footer>

<script src="<?php echo $bootstrapjs; ?>"></script>
<script src="<?php echo $jquery; ?>"></script>
<script src="<?php echo $mainjs; ?>"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<!-- <script src="https://code.jquery.com/jquery-3.5.1.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="../public/assets/js/aos.js"></script>
<script src="../public/assets/js/datatables.js"></script>
<script src="../public/assets/js/datatables.min.js"></script>
<script src="../public/assets/js/chartjs.min.js"></script>
<script src="../public/assets/js/chart.js"></script>
<script src="../public/assets/js/emergencyAjax.js"></script>

<script>
    AOS.init();
</script>

<script>
    var ctx2 = document.getElementById("line-chart").getContext("2d");

    new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
            datasets: [{
                label: 'Hey',
                tension: 0,
                borderWidth: 0,
                pointRadius: 5,
                pointBackgroundColor: "rgba(255, 255, 255, .8)",
                pointBorderColor: "transparent",
                borderColor: "rgba(255, 255, 255, .8)",
                borderColor: "rgba(255, 255, 255, .8)",
                borderWidth: 4,
                backgroundColor: "transparent",
                fill: true,
                data: [0, 10, 5, 2, 20, 30, 45],
                maxBarThickness: 6

            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                }
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
            scales: {
                y: {
                    grid: {
                        drawBorder: false,
                        display: true,
                        drawOnChartArea: true,
                        drawTicks: false,
                        borderDash: [5, 5],
                        color: 'rgba(255, 255, 255, .2)'
                    },
                    ticks: {
                        display: true,
                        color: '#f8f9fa',
                        padding: 10,
                        font: {
                            size: 13,
                            weight: 300,
                            family: "Roboto",
                            style: 'normal',
                            lineHeight: 2
                        },
                    }
                },
                x: {
                    grid: {
                        drawBorder: false,
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                        borderDash: [5, 5]
                    },
                    ticks: {
                        display: true,
                        color: '#f8f9fa',
                        padding: 10,
                        font: {
                            size: 9,
                            weight: 300,
                            family: "Roboto",
                            style: 'normal',
                            lineHeight: 2
                        },
                    }
                },
            },
        },
    });
</script>
<!-- get The message success -->
<?php if ($flash = getFlash('success')) : ?>
    <script>
        Swal.fire({
            icon: 'success',
            title: "<?php echo $flash; ?>",
            showConfirmButton: true,
        });
    </script>
<?php endif; ?>

<?php if ($flash = getFlash('failed')) : ?>
    <script>
        Swal.fire({
            icon: 'warning',
            title: "<?php echo $flash; ?>",
            showConfirmButton: true,
        });
    </script>
<?php endif; ?>

<?php if (showError('password')) : ?>
    <script>
        validate('password');
    </script>
<?php endif; ?>
</body>

</html>