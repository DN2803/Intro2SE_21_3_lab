USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspAddPatient]    Script Date: 1/20/2024 3:07:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[uspAddPatient]
    @MABN char(15),
    @HOTEN_BN NVARCHAR(50),
    @NGAYSINH DATE,
    @GIOITINH nvarchar(5),
    @SDT_BN char(10),
    @EMAIL_BN varchar(30),
    @DIACHI nvarchar(50),
    @CHONGCHIDINH NVARCHAR(255),
    @DIUNG NVARCHAR(255),
	@STT INT
    
AS
BEGIN
    -- Kiểm tra xem MABN đã tồn tại hay chưa
    IF EXISTS (SELECT 1 FROM BENHNHAN WHERE SDT = @SDT_BN)
    BEGIN
        -- MABN đã tồn tại, thực hiện cập nhật các thuộc tính mới
        UPDATE BENHNHAN
        SET
            HOTEN = @HOTEN_BN,
            NGAYSINH = @NGAYSINH,
			GIOITINH = @GIOITINH,
			MABN = @MABN,
			EMAIL = @EMAIL_BN,
			DIACHI = @DIACHI,
			CHONGCHIDINH = @CHONGCHIDINH,
			DIUNG = @DIUNG
        WHERE MABN = @MABN;
    END
    ELSE
    BEGIN
        -- MABN chưa tồn tại, thêm dữ liệu mới
        INSERT INTO BENHNHAN (
            MABN,
            HOTEN,
            NGAYSINH,
            GIOITINH,
            SDT,
            EMAIL,
            DIACHI,
            CHONGCHIDINH,
            DIUNG,
            STT
       
        )
        VALUES (
            @MABN,
            @HOTEN_BN,
            @NGAYSINH,
            @GIOITINH,
            @SDT_BN,
            @EMAIL_BN,
            @DIACHI,
            @CHONGCHIDINH,
            @DIUNG,
            @STT
        );
    END;
END;
