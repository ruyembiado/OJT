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
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="../public/assets/js/aos.js"></script>
<script src="../public/assets/js/datatables.js"></script>
<script src="../public/assets/js/datatables.min.js"></script>
<script src="../public/assets/js/chartjs.min.js"></script>
<script src="../public/assets/js/chart.js"></script>
<script>
    AOS.init();
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